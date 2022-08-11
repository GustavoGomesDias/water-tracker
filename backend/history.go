package backend

import (
	"encoding/json"
	"io/ioutil"
	"time"
)

type History struct {
	CreateDate time.Time `json:"createdAt"`
	Action     string    `json:"action"`
}

type HistoryNodes struct {
	HistoryNodes []History `json:"history_nodes"`
}

func NewHistory(action string) *History {
	return &History{
		CreateDate: time.Now(),
		Action:     action,
	}
}

func GetHistoryNode() HistoryNodes {
	file, err := ioutil.ReadFile("history.json")

	if err != nil {
		return HistoryNodes{
			HistoryNodes: []History{},
		}
	}

	historyNodes := HistoryNodes{}

	json.Unmarshal([]byte(file), &historyNodes)

	return historyNodes
}

func SaveHistory(action string) {
	hn := GetHistoryNode()
	h := NewHistory(action)
	hn.HistoryNodes = append(hn.HistoryNodes, *h)
	data, _ := json.Marshal(hn)
	_ = ioutil.WriteFile("history.json", data, 0644)
}

func (hn *HistoryNodes) GetHistoryByPage(page int) []History {

	historyNodes := GetHistoryNode()

	if len(historyNodes.HistoryNodes) <= 0 {
		return []History{}
	}

	if len(historyNodes.HistoryNodes) > (page*10)+10 {
		return historyNodes.HistoryNodes[(page * 10) : (page*10)+10]
	}

	if len(historyNodes.HistoryNodes) < 10 {
		return historyNodes.HistoryNodes
	}

	if len(historyNodes.HistoryNodes) < (page*10)+10 {
		return []History{}
	}

	return historyNodes.HistoryNodes[(page * 10):]

}
