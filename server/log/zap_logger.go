package log

import (
	"path/filepath"
	"runtime"
	"strconv"
	"strings"

	"github.com/temporalio/ui-server/v2/server/log/tag"
	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
)

const (
	skipForZapLogger = 3
	// we put a default message when it is empty so that the log can be searchable/filterable
	defaultMsgForEmpty  = "none"
	testLogFormatEnvVar = "TEMPORAL_TEST_LOG_FORMAT" // set to "json" for json logs in tests
	testLogLevelEnvVar  = "TEMPORAL_TEST_LOG_LEVEL"  // set to "debug" for debug level logs in tests
)

type (
	// zapLogger is logger backed up by zap.Logger.
	zapLogger struct {
		zl   *zap.Logger
		skip int
	}
)

var _ Logger = (*zapLogger)(nil)

// NewZapLogger returns a new zap based logger from zap.Logger
func NewZapLogger(zl *zap.Logger) *zapLogger {
	return &zapLogger{
		zl:   zl,
		skip: skipForZapLogger,
	}
}

// BuildZapLogger builds and returns a new zap.Logger for this logging configuration
func BuildZapLogger(cfg Config) *zap.Logger {
	return buildZapLogger(cfg, true)
}

func (l *zapLogger) Debug(msg string, tags ...tag.Tag) {
	if l.zl.Core().Enabled(zap.DebugLevel) {
		msg = setDefaultMsg(msg)
		fields := l.buildFieldsWithCallAt(tags)
		l.zl.Debug(msg, fields...)
	}
}

func (l *zapLogger) Info(msg string, tags ...tag.Tag) {
	if l.zl.Core().Enabled(zap.InfoLevel) {
		msg = setDefaultMsg(msg)
		fields := l.buildFieldsWithCallAt(tags)
		l.zl.Info(msg, fields...)
	}
}

func (l *zapLogger) Warn(msg string, tags ...tag.Tag) {
	if l.zl.Core().Enabled(zap.WarnLevel) {
		msg = setDefaultMsg(msg)
		fields := l.buildFieldsWithCallAt(tags)
		l.zl.Warn(msg, fields...)
	}
}

func (l *zapLogger) Error(msg string, tags ...tag.Tag) {
	if l.zl.Core().Enabled(zap.ErrorLevel) {
		msg = setDefaultMsg(msg)
		fields := l.buildFieldsWithCallAt(tags)
		l.zl.Error(msg, fields...)
	}
}

func (l *zapLogger) DPanic(msg string, tags ...tag.Tag) {
	if l.zl.Core().Enabled(zap.DPanicLevel) {
		msg = setDefaultMsg(msg)
		fields := l.buildFieldsWithCallAt(tags)
		l.zl.DPanic(msg, fields...)
	}
}

func (l *zapLogger) Panic(msg string, tags ...tag.Tag) {
	if l.zl.Core().Enabled(zap.PanicLevel) {
		msg = setDefaultMsg(msg)
		fields := l.buildFieldsWithCallAt(tags)
		l.zl.Panic(msg, fields...)
	}
}

func (l *zapLogger) Fatal(msg string, tags ...tag.Tag) {
	if l.zl.Core().Enabled(zap.FatalLevel) {
		msg = setDefaultMsg(msg)
		fields := l.buildFieldsWithCallAt(tags)
		l.zl.Fatal(msg, fields...)
	}
}

func buildZapLogger(cfg Config, disableCaller bool) *zap.Logger {
	encodeConfig := zapcore.EncoderConfig{
		TimeKey:        "ts",
		LevelKey:       "level",
		NameKey:        "logger",
		CallerKey:      zapcore.OmitKey, // we use our own caller
		FunctionKey:    zapcore.OmitKey,
		MessageKey:     "msg",
		StacktraceKey:  "stacktrace",
		LineEnding:     zapcore.DefaultLineEnding,
		EncodeLevel:    zapcore.LowercaseLevelEncoder,
		EncodeTime:     zapcore.ISO8601TimeEncoder,
		EncodeDuration: zapcore.SecondsDurationEncoder,
		EncodeCaller:   zapcore.ShortCallerEncoder,
	}
	if disableCaller {
		encodeConfig.CallerKey = zapcore.OmitKey
		encodeConfig.EncodeCaller = nil
	}

	outputPath := "stderr"
	if len(cfg.OutputFile) > 0 {
		outputPath = cfg.OutputFile
	}
	if cfg.Stdout {
		outputPath = "stdout"
	}
	encoding := "json"
	if cfg.Format == "console" {
		encoding = "console"
	}
	config := zap.Config{
		Level:            zap.NewAtomicLevelAt(parseZapLevel(cfg.Level)),
		Development:      cfg.Development,
		Sampling:         nil,
		Encoding:         encoding,
		EncoderConfig:    encodeConfig,
		OutputPaths:      []string{outputPath},
		ErrorOutputPaths: []string{outputPath},
		DisableCaller:    disableCaller,
	}
	logger, _ := config.Build()
	return logger
}

func parseZapLevel(level string) zapcore.Level {
	switch strings.ToLower(level) {
	case "debug":
		return zap.DebugLevel
	case "info":
		return zap.InfoLevel
	case "warn":
		return zap.WarnLevel
	case "error":
		return zap.ErrorLevel
	case "dpanic":
		return zap.DPanicLevel
	case "panic":
		return zap.PanicLevel
	case "fatal":
		return zap.FatalLevel
	default:
		return zap.InfoLevel
	}
}

func setDefaultMsg(msg string) string {
	if msg == "" {
		return defaultMsgForEmpty
	}
	return msg
}

func (l *zapLogger) buildFieldsWithCallAt(tags []tag.Tag) []zap.Field {
	fields := make([]zap.Field, len(tags)+1)
	l.fillFields(tags, fields)
	fields[len(fields)-1] = zap.String(tag.LoggingCallAtKey, caller(l.skip))
	return fields
}

// fillFields fill fields parameter with fields read from tags. Optimized for performance.
func (l *zapLogger) fillFields(tags []tag.Tag, fields []zap.Field) {
	for i, t := range tags {
		if zt, ok := t.(tag.ZapTag); ok {
			fields[i] = zt.Field()
		} else {
			fields[i] = zap.Any(t.Key(), t.Value())
		}
	}
}

func caller(skip int) string {
	_, path, line, ok := runtime.Caller(skip)
	if !ok {
		return ""
	}
	return filepath.Base(path) + ":" + strconv.Itoa(line)
}
