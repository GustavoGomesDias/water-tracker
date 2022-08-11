package backend

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"strconv"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) OnStartup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) OnClose(ctx context.Context) {
	fmt.Printf("Closed!")
}

func (a *App) SaveTrackerConfig(configs string) {
	_ = ioutil.WriteFile("tracker.json", []byte(configs), 0644)
	SaveHistory("Set Configuration")
}

func (a *App) GetActualPercent() int {
	file, err := ioutil.ReadFile("tracker.json")

	if err != nil {
		return 0
	}

	tracker := Tracker{}

	json.Unmarshal([]byte(file), &tracker)

	actQ, _ := strconv.Atoi(tracker.ActualQuantity.String())
	dfQ, _ := strconv.Atoi(tracker.DefaultQuantity.String())

	percent := (actQ * 100) / dfQ

	return percent
}

func (a *App) SetActualQuantity(value string) {
	file, _ := ioutil.ReadFile("tracker.json")

	// if err != nil {
	// 	panic(err)
	// }

	tracker := Tracker{}

	err := json.Unmarshal([]byte(file), &tracker)

	if err != nil {
		panic(err)
	}

	var myTracker map[string]interface{}

	json.Unmarshal([]byte(file), &myTracker)
	_, ok := myTracker["DefaultQuantity"]

	if !ok {
		return
	}

	trackerActualValue, _ := strconv.Atoi(tracker.ActualQuantity.String())
	addVelue, _ := strconv.Atoi(value)

	tracker.ActualQuantity = json.Number(strconv.Itoa(trackerActualValue + addVelue))

	jsonData, _ := json.Marshal(tracker)

	_ = ioutil.WriteFile("tracker.json", jsonData, 0644)
	SaveHistory("Add Value")
}

func (a *App) GetTracker() Tracker {
	file, err := ioutil.ReadFile("tracker.json")

	if err != nil {
		return Tracker{}
	}

	tracker := Tracker{}

	json.Unmarshal([]byte(file), &tracker)

	return tracker
}

func (a *App) GetAppHistoryWithPage(page int) []History {
	historyNode := GetHistoryNode()

	return historyNode.GetHistoryByPage(page)
}
