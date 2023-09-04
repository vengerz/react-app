import { Container, Table , Image, Group, ActionIcon } from "@mantine/core";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { IconSettings } from "@tabler/icons-react";

function ClientComponent() {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost/phpapi/member.php")
      .then((response) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setClients(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(clients);
  const rows = clients.map((element) => (
    <tr key={element.id}>
        <td>{element.id}</td>
        <td>{element.fullname}</td>
        <td>{element.email}</td>
        <td>{element.age}</td>
        <td><Image withPlaceholder width={200} height={80} fit="contain" src={element.picture}/></td>
        <td>{element.timest}</td>
        <td>
            <Group>
            <ActionIcon variant="default"><IconSettings size="1rem" /></ActionIcon>
            <ActionIcon variant="default"><IconSettings size="1rem" /></ActionIcon>
            <ActionIcon variant="default"><IconSettings size="1rem" /></ActionIcon>
            </Group>
        </td>
    </tr>
  ));
  return (
    <>
      <Container ta={'center'} maw={1000}>
        <Table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Fullname</td>
                    <td>Email</td>
                    <td>age</td>
                    <td>picture</td>
                    <td>time</td>
                    <td>option</td>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
      </Container>
    </>
  );
}

export default ClientComponent;
