import { groupStacksByType } from "../../helpers/Stack/getStackList";
import type { StackListProps } from "../../typings/reactComponents";
import type { sectionInterface, StackSkillType } from "../../typings/types";
import StackSkillComponent from "./StackItem/StackSkillComponent";
import { Box, Typography, type Theme } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const sections: sectionInterface[] = [
  { title: "skills.markup.title", type: "markup" },
  { title: "skills.style.title", type: "style" },
  { title: "skills.language.title", type: "language" },
  { title: "skills.framework.title", type: "framework" },
  { title: "skills.backend.title", type: "backend" },
  { title: "skills.database.title", type: "database" },
  { title: "skills.testing.title", type: "testing" },
  { title: "skills.versioning.title", type: "versioning" },
  { title: "skills.design.title", type: "design" },
  { title: "skills.system.title", type: "system" },
];

const StackListComponent = ({ stacks }: StackListProps): React.ReactNode => {
  const { t } = useTranslation();

  const renderStackItems = (stackItems: StackSkillType[]) =>
    stackItems.map((stackItem: StackSkillType) => (
      <StackSkillComponent stack={stackItem} key={stackItem.text} />
    ));

  const renderSection = (section: sectionInterface) => {
    const filteredStacks = groupStacksByType(stacks, section.type);

    return (
      <Box key={section.type} sx={{ width: "100%", mb: 6 }}>
        <Typography
          component="h3"
          sx={(theme: Theme) => ({
            fontSize: theme?.typography?.h3?.fontSize,
            color: theme?.custom?.white,
          })}
        >
          {t(section.title)}
        </Typography>
        <Box
          component="div"
          sx={{
            margin: "0 0.5em 0",
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(5, 1fr)",
              md: "repeat(6, 1fr)",
              lg: "repeat(8, 1fr)",
            },
            gap: "1em",
          }}
        >
          {renderStackItems(filteredStacks)}
        </Box>
      </Box>
    );
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      {sections.map(renderSection)}
    </Box>
  );
};

export default StackListComponent;
