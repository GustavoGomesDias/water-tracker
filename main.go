package main

import (
	"embed"
	"w-tracker/backend"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
)

//go:embed frontend/dist
var assets embed.FS

func main() {
	// Create an instance of the app structure
	app := backend.NewApp()

	// Create application with options
	err := wails.Run(&options.App{
		Title:         "Water Tracker",
		Width:         1024,
		Height:        768,
		Assets:        assets,
		OnStartup:     app.OnStartup,
		OnShutdown:    app.OnClose,
		DisableResize: true,

		Bind: []interface{}{
			app,
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}
