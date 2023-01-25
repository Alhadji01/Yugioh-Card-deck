// TODO: answer here
import { useState, useEffect } from "react";
import { SimpleGrid, Select } from "@chakra-ui/react"
import Card from "./Cards";

function Home() {
  // TODO: answer here
  const [datas, setDatas] = useState({})
  const [click, setClick] = useState("")
  const [Loading, setLoading] = useState(false)

  const loadCard = async() => {
    setLoading(true)
    try {
      const response = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg&level=4")
      const data = await response.json();
      setDatas(data) 
    } catch (error) {
      console.log(error)
    }
    setLoading(false) 
    
  }
  useEffect(()=>{
    loadCard()
  },[])
  const dataa = (datas.data)
  function sortData(type) {
    if(click === "name"){
      return type.sort(function(a,b){
        if(a.name > b.name){
          return 1
        }
        else {return -1}
      })
    }
    else if(click === "attack"){
      return type.sort(function(a,b){
        return (a.atk - b.atk)
      })
    }
    else if(click === "defence"){
      return type.sort(function(a,b){
        return(a.def - b.def)
      })
    }
    else{return dataa}
  }
  
  return (
  <>
  {Loading ? <p>Loading...</p> :  datas.data ? 
  <>
  <Select name="sort" placeholder='Sort by' onChange={(e)=>{
    const clicked = e.target.value
    setClick(clicked)
  }}>
    <option value='name'>Name</option>
    <option value='attack'>Attack</option>
    <option value='defence'>Defence</option>
  </Select>
  <SimpleGrid columns={4} gap="14" margin={4}><Card card={sortData(dataa)}/></SimpleGrid>
  </>
    : 
  <p>kosong</p>}
  </>) // TODO: replace this
}

export default Home;
