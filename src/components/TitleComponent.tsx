import { Text } from '@mantine/core'
import React from 'react'

function TitleComponent({data}: any) {
  return (
    <Text ta={"center"} my={10} 
    variant="gradient"
    gradient={{ from: 'black', to: 'gold', deg: 40 }}
    fz={'xl'}
    fw={700}>
         {data}
    </Text>
  )
}

export default TitleComponent