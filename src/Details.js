import { Box, Image, Heading, Text, Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

function Details({card}){
    let navigate = useNavigate()
    const clicked = ()=>{
        navigate('/')
    }
    const cards = card.map((e)=>{
        const gambar = e.card_images
        const url = gambar.map((c)=>{
          return c.image_url
        })
        const set = e.card_sets
        return (
        <Box p={10}>
            <Box display='flex'>
                <Button onClick={clicked}>Back</Button>
                <Image src={url} alt='Dan Abramov' />
                <div>
                <Heading>{e.name}</Heading>
                <Text>Level: {e.level}</Text>
                <Text>{e.attribute}</Text>
                <Text>ATK/{e.atk} DEF/{e.def}</Text>
                <Text>[ {e.type} / {e.race} ]</Text>
                <Text>Description: {e.desc}</Text>
                </div>
            </Box>
            <Box display='flex'>
            {set.map((c)=>{
                    return (
                        <Box border='2px' maxW={'md'} p='3' m={3}>
                            <Text>Name: {c.set_name}</Text>
                            <Text>Code: {c.set_code}</Text>
                            <Text>Rarity: {c.set_rarity}</Text>
                            <Text>Price: {c.set_price}</Text>
                        </Box>
                        
                    )
                    
                })}
            </Box>
            
        </Box>
        )
      })
    return cards
}
export default Details;