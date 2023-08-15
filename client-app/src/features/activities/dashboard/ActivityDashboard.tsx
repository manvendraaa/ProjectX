import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../detail/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
  editMode: boolean;
  formClose: () => void;
  formOpen: (id: string) => void;
}

export default function ActivityDashboard({
  activities,
  selectActivity,
  selectedActivity,
  cancelSelectActivity,
  editMode,
  formOpen,
  formClose,
}: Props) {
  return (
    <Grid>
      <GridColumn width="10">
        <ActivityList activites={activities} selectActivity={selectActivity} />
      </GridColumn>
      <GridColumn width="6">
        {selectedActivity && !editMode && (
          <ActivityDetails
            activity={selectedActivity}
            cancelSelectActivity={cancelSelectActivity}
            formOpen={formOpen}
          />
        )}
        {editMode && (
          <ActivityForm formClose={formClose} selectedActivity={selectedActivity} />
        )}
      </GridColumn>
    </Grid>
  );
}
