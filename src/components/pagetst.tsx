import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'
import { setId, setTask } from '../store/reducer';

const Pagetst: React.FC = () => {
  const name = useSelector((state: any) => state.id)
  const email = useSelector((state: any) => state.task)
  const dispatch = useDispatch()


  useEffect(() => {
    axios.get('http://localhost:27017/app/task').then(item => {
      console.log(item.data)
      dispatch(setId(item.data))
      dispatch(setTask(item.data.task))
    })
  })

  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  )
}

export default Pagetst;