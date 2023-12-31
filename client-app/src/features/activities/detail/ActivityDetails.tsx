import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  activity: Activity;
  cancelSelectActivity: () => void;
  formOpen: (id: string) => void;
}

export default function ActivityDetails({ activity , cancelSelectActivity,formOpen}: Props) {
  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group>
          <Button basic color="blue" onClick={() => formOpen(activity.id)} content="Edit" />
          <Button basic color="grey" onClick={cancelSelectActivity} content="Cancel" />
        </Button.Group>
      </Card.Content>
    </Card>
  );
}
