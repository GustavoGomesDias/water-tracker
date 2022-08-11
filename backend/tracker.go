package backend

import (
	"encoding/json"
	"fmt"
)

type Tracker struct {
	DefaultQuantity json.Number `json:"defaultQuantity"`
	ActualQuantity  json.Number `json:"actualQuantity"`
	AlertTime       json.Number `json:"alertTime"`
}

func NewTracker(configs string) *Tracker {
	fmt.Println(configs)
	tracker := &Tracker{}
	err := json.Unmarshal([]byte(configs), &tracker)
	fmt.Println(tracker.ActualQuantity)
	if err != nil {
		panic(err)
	}
	return tracker
}
