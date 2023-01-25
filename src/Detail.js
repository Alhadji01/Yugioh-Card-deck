// TODO: answer here
import { useParams, } from "react-router-dom";
import { useEffect, useState, } from "react";
import { Box, Image, Heading, Text } from "@chakra-ui/react"
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
  // const cards = dataa.map((e)=>{
  //   const gambar = e.card_images
  //   const url = gambar.map((c)=>{
  //     return c.image_url_small
  //   })
  //   const set = e.card_sets
  //   const setName = set.map((c)=>{
  //     return c.set_name
  //   })
  //   const setCode = set.map((c)=>{
  //     return c.set_code
  //   })
  //   const setRarity = set.map((c)=>{
  //     return c.set_rarity
  //   })
  //   const setPrice = set.map((c)=>{
  //     return c.set_price
  //   })
  //   return (
  //     <Box>
  //       <Image src={url} alt='Dan Abramov' />
  //       <div>
  //         <Heading>{e.name}</Heading>
  //         <Text>Level: {e.level}</Text>
  //         <Text>{e.attribute}</Text>
  //         <Text>ATK/{e.atk} DEF/{e.def}</Text>
  //         <Text>{e.desc}</Text>
  //       </div>
  //       <Box>
  //         <Text>{setName}</Text>
  //         <Text>{setCode}</Text>
  //         <Text>{setRarity}</Text>
  //         <Text>{setPrice}</Text>
  //       </Box>
  //     </Box>
  //   )
  // })
  return (
    <>
    {loading ? <p>Loading...</p> : dataa ? <Details card={dataa}/> : <p>Kosong</p>}
    </>
  )
}

export default Detail;
