import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../detail/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface Props {
  activities: Activity[];
}

export default function ActivityDashboard({ activities }: Props) {
  return (
    <Grid>
      <GridColumn width="10">
        <ActivityList activites={activities} />
      </GridColumn>
      <GridColumn width="6">
        {activities[0] && <ActivityDetails activity={activities[0]} />}
        <ActivityForm />
      </GridColumn>
    </Grid>
  );
}
