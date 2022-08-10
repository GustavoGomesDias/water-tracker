package backend

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
)

type Tracker struct {
	defaultQuantity uint64 `json:"defaultQuantity"`
	actualQuantity  uint64 `json:"actualQuantity"`
	alertTime       uint64 `json:"alertTime"`
}

func NewTracker(configs string) *Tracker {
	fmt.Println(configs)
	tracker := &Tracker{}
	err := json.Unmarshal([]byte(configs), &tracker)
	fmt.Println(tracker.actualQuantity)
	if err != nil {
		panic(err)
	}
	return tracker
}

func (t *Tracker) CreateTracker() {
	file, err := json.MarshalIndent(t, "", "")

	if err != nil {
		panic(err)
	}

	_ = ioutil.WriteFile("tracker.json", file, 0644)
}

// func (t *Tracker) GetAllConfigs() {
// 	return t
// }
