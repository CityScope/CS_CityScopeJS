import { List, ListItem, CardContent, Card } from "@mui/material";
import TypesMenu from "./TypesMenu";
import LayersMenu from "./LayersMenu";
import ViewSettingsMenu from "./ViewSettingsMenu";
import ScenariosMenu from "./ScenariosMenu";
import ResizableDrawer from "../../../Components/ResizableDrawer";
import EditMenu from "./EditMenu";
import TableInfo from "./TableInfo";
import AnimationMenu from "./AnimationMenu";

function MenuContainer() {
  const menuItemsArray = [
    <TableInfo />,
    <EditMenu />,
    <TypesMenu />,
    <ScenariosMenu />,
    <LayersMenu />,
    <ViewSettingsMenu />,
    <AnimationMenu />,
  ];

  const MenuItems = () => {
    const m = [];

    menuItemsArray.forEach((item, index) => {
      m.push(
        <ListItem key={index}>
          <Card variant="outlined" sx={{ width: "100%" }}>
            <CardContent>{item}</CardContent>
          </Card>
        </ListItem>
      );
    });
    return m;
  };

  return (
    <ResizableDrawer direction="left">
      <List>
        <MenuItems />
      </List>
    </ResizableDrawer>
  );
}

export default MenuContainer;
