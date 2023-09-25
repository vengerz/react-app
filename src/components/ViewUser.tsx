import { Box, Center, Container, Group, Image,Text } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewUserComponent() {
  const { id } = useParams();
  const [clients, setClients] = useState([]);
  const getData = async (uid: any) => {
    const res = await axios.get(`http://localhost/phpapi/member.php?id=${uid}`);
    setClients(res.data);
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  console.log(clients);

  const name = clients.fullname;
  const email = clients.email;
  const picture = clients.picture;
  return (
    <Container>
    <Group mt={50}>
    <Image withPlaceholder maw={400} mx={'auto'} fit="contain" src={picture} />
    </Group>
    <Group>
    <Center maw={400} h={100} mx="auto">
      ID : {id} <br/>
      Name : {name} <br/>
      Email : {email} <br/>
      </Center>
      </Group>

    </Container>
  );
}

export default ViewUserComponent;
