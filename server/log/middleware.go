package log

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"go.uber.org/zap"
)

func ZapLogger(logger *zap.Logger) echo.MiddlewareFunc {
	return middleware.LoggerWithConfig(middleware.LoggerConfig{
		Format: `{"time":"${time_rfc3339_nano}","remote_ip":"${remote_ip}","method":"${method}","uri":"${uri}","status":${status},"error":"${error}","latency_human":"${latency_human}"}` + "\n",
		Output: &zapEchoLogger{logger: logger},
	})
}

type zapEchoLogger struct {
	logger *zap.Logger
}

func (z *zapEchoLogger) Write(p []byte) (n int, err error) {
	z.logger.Info(string(p))
	return len(p), nil
}
