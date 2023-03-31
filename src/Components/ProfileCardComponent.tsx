import Box from "@mui/material/Box";
import styles from "./styles.module.css";
import BgPatternCard from "../assets/bg-pattern-card.svg";

import ImageVictor from "../assets/image-victor.jpg";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import stats from "../data.json";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const ProfileCardComponent = () => {
  return (
    <Box className={styles["container"]}>
      <Box className={styles["img"]}>
        <img src={BgPatternCard} />
        <Avatar className={styles["avatar"]} src={ImageVictor}></Avatar>
      </Box>
      <Typography className={styles["name"]}>
        Victor Crest <span className={styles["age"]}>26</span>
      </Typography>
      <Typography className={styles["country"]} variant="body2">
        London
      </Typography>
      <Divider className={styles["divider"]} />
      <List className={styles["stats"]}>
        {stats.map(({ amount, activity }, key) => (
          <ListItem className={styles["stat"]} key={key}>
            <Typography className={styles["amount"]}>{amount}</Typography>
            <Typography className={styles["activity"]}>{activity}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ProfileCardComponent;
