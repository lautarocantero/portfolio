import AboutMeComponent from "../components/AboutMe/AboutMeComponent";
import AppBarComponent from "../components/AppBar/AppBar";
import ContactComponent from "../components/Contact/ContactComponent";
import ExperienceTab from "../components/ExperienceTab/ExperienceTab";
import PresentationComponent from "../components/Presentation/Presentation";
import PreviousJobs from "../components/PreviousJobs/PreviousJobs";
import ProjectsComponent from "../components/ProjectsComponent/ProjectsComponent";
import SimpleDialog from "../components/SimpleDialog/SimpleDialog";
import StackComponent from "../components/StackComponent/StackComponent";
import PortfolioLayout from "../layout/PortfolioLayout";

const PortfolioPage = () => {

    return (
        <PortfolioLayout>
            <AppBarComponent />
            <PresentationComponent />
            <PreviousJobs />
            <ExperienceTab />
            <ProjectsComponent />
            <StackComponent />
            <AboutMeComponent />
            <ContactComponent />
            <SimpleDialog />
        </PortfolioLayout>
    )
}

export default PortfolioPage;