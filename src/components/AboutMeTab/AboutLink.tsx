import { alpha, Box, Tooltip, type Theme } from "@mui/material";
import type { AboutLinkProps } from "../../typings/reactComponents";
import handleAboutLinkAction from "../../helpers/About/handleButtonsAction";
import { useContext } from "react";
import { SimpleDialogContext } from "../SimpleDialog/SimpleDialogContext";


const AboutLinkComponent = ({link}: AboutLinkProps):React.ReactNode => {
    const {text, icon, url, action}: {text: string, icon: string, url?: string, action: string} = link;
    const { setShowModal } =  useContext(SimpleDialogContext)!;

    return(
        <Tooltip title={text}>
            <Box
                onClick={ () => handleAboutLinkAction({  action,  url: url ?? '', setShowModal})}
                sx={(theme: Theme) => ({
                    width:'2.2em',
                    height:'2.2em',
                    border: `1px solid ${theme?.custom?.white}`,
                    borderRadius: '50%',
                    backgroundColor: alpha(theme?.custom?.white, 0.7),
                })}
            >
                <Box
                    component={'img'}
                    src={icon}
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        p: '0.5em',
                    }}
                />
            </Box>
        </Tooltip>
    )
};
        
export default AboutLinkComponent;