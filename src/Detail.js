// TODO: answer here
import { useParams, } from "react-router-dom";
import { useEffect, useState, } from "react";
import Details from "./Details";

function Detail() {
  const [datas, setDatas] = useState({})
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  const loadDetail = async() => {
    setLoading(true)
    try {
      const response = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?id="+(id))
      const data = await response.json();
      setDatas(data) 
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }
  useEffect(()=>{
    loadDetail()
  },[])
  const dataa = (datas.data)
  return (
    <>
    {loading ? <p>Loading...</p> : dataa ? <Details card={dataa}/> : <p>Kosong</p>}
    </>
  )
}

export default Detail;
