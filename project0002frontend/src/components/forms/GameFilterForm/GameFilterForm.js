import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from 'store/lobby/lobbySlice'

const GameFilterForm = () => {
    const [host, setHost] = useState("")
    const [server, setServer] = useState("")
    const [score, setScore] = useState(0)
    const tmp = useSelector(state => state.lobby.serverFilter)
    const state = useSelector((state) => state)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        if (e.keyCode === 13){
            let filterData = {
                playerList: 0,
                playerLimit: 0,
                serverHost: {   userName: shost => shost.includes(host),
                                userAvatar:"",
                                userEmail:"" },
                serverName: "", //sname => sname.includes(server),
                serverStatus: "",
                serverId: 0,
                timeLimit: 60,
                timeRunning: 0,
                scoreLimit: 0,
                setList: [{id:0, setName:"basic"}, {id:1, setName:"se2"}],
                setSelectedList:[],
            }
            //console.log(filterData)
            dispatch(setFilter(filterData))
            //console.log(tmp)
        }
    }

    return (
        <div>
        <fieldset>
            <label htmlFor='serverHost'>Server Host Name:     </label>
            <input type='text' value={host} id='serverHost' onChange={e => setHost(e.target.value)} onKeyUp={handleSubmit} /><br/>
            <label htmlFor='serverName'>Server Name:          </label>
            <input type='text' value={server} id='serverName' onChange={e => setServer(e.target.value)} onKeyUp={handleSubmit} /><br/>
            <label htmlFor='scoreLimit'>scoreLimit(Test Data):</label>
            <input type='number' value={score} min='1' max='10' id='scoreLimit' onChange={e => setScore(e.target.value)} onKeyUp={handleSubmit} />
        </fieldset>
        </div>
    )
}

export default GameFilterForm
