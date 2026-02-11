import AboutMeComponent from "../components/AboutMe/AboutMeComponent";
import AppBarComponent from "../components/AppBar/AppBar";
import ContactComponent from "../components/Contact/ContactComponent";
import ExperienceTab from "../components/ExperienceTab/ExperienceTab";
import PresentationComponent from "../components/Presentation/Presentation";
import PreviousJobs from "../components/PreviousJobs/PreviousJobs";
import ProjectsSection from "../components/ProjectsComponent/ProjectsSection";
import SimpleSnackbar from "../components/shared/snackbar/SnackBarComponent";
import ImageDialog from "../components/ImageDialog/ImageDialog";
import StackComponent from "../components/StackComponent/StackComponent";
import PortfolioLayout from "../layout/PortfolioLayout";

const PortfolioPage = () => {

    return (
        <PortfolioLayout>
            <AppBarComponent />
            <PresentationComponent />
            <PreviousJobs />
            <ExperienceTab />
            <ProjectsSection />
            <StackComponent />
            <AboutMeComponent />
            <ContactComponent />
            <ImageDialog />
            <SimpleSnackbar />
        </PortfolioLayout>
    )
}

export default PortfolioPage;