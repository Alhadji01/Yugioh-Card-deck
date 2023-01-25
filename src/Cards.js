// TODO: answer here
import { Image, Heading, Box } from "@chakra-ui/react"
import { Link } from "react-router-dom"

function Card({ card }) {
  const cards = card.map((e)=>{
    const gambar = e.card_images
    const url = gambar.map((c)=>{
      return c.image_url
    })
    return (
      
        <Link to={"/card/"+(e.id)}>
          <Box className="yugioh-card">
          <Image width={250} src={url} alt='Dan Abramov' />
          <Heading>{e.name}</Heading>
          </Box>
        </Link>
      
      
    )
  })
  return cards // TODO: replace this
}

export default Card;
