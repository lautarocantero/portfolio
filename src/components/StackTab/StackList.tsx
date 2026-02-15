import { groupStacksByType } from "../../helpers/Stack/getStackList";
import type { StackInterface, StackSkillType } from "../../typings/types";
import StackSkillComponent from "./StackItem/StackSkillComponent";
import { Box, Typography, type Theme } from "@mui/material";
import { motion } from "framer-motion";

interface StackGridProps {
  stacks: StackSkillType[];
}

interface sectionInterface {
  title: string;
  type: string;
}

const StackListComponent = ({ stacks }: StackGridProps): React.ReactNode => {
    const sections: sectionInterface[] = [
      { title: "Lenguajes de Marcado", type: "markup" },
      { title: "Lenguajes de Estilos", type: "style" },
      { title: "Lenguajes de Programación", type: "language" },
      { title: "Frameworks y Librerías", type: "framework" },
      { title: "Backend y Servicios", type: "backend" },
      { title: "Bases de Datos", type: "database" },
      { title: "Testing y Calidad", type: "testing" },
      { title: "Control de Versiones y Colaboración", type: "versioning" },
      { title: "Diseño y Prototipado", type: "design" },
      { title: "Sistemas Operativos y Entornos", type: "system" },
    ];


  return (
    <Box 
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{ 
            display: "flex", 
            flexDirection: "column", 
            width: "100%" 
        }}
    >
      {sections.map((section: sectionInterface) => {
        const filteredStacks = groupStacksByType(stacks, section.type);

        return (
          <Box key={section.type} sx={{ width: "100%", mb: 6 }}>
            <Typography
              component={"h3"}
              sx={(theme: Theme) => ({
                fontSize: theme?.typography?.h3?.fontSize,
                color: theme?.custom?.white,
              })}
            >
              {section.title}
            </Typography>
            <Box
              component={"div"}
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
              {filteredStacks.map((stackItem: StackInterface) => (
                <StackSkillComponent stack={stackItem} key={stackItem.text} />
              ))}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default StackListComponent;
 