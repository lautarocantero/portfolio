import AboutMeComponent from "../components/AboutMe/AboutMeComponent";
import AppBarComponent from "../components/AppBar/AppBar";
import ContactComponent from "../components/Contact/ContactComponent";
import ExperienceTab from "../components/ExperienceTab/ExperienceTab";
import PresentationComponent from "../components/Presentation/Presentation";
import PreviousJobs from "../components/PreviousJobs/PreviousJobs";
import ProjectsSection from "../components/ProjectsComponent/ProjectsTab";
import SimpleSnackbar from "../components/shared/snackbar/SnackBarComponent";
import ImageDialog from "../components/ImageDialog/ImageDialog";
import SimpleDialog from "../components/SimpleDialog/SimpleDialog";
import PortfolioLayout from "../layout/PortfolioLayout";
import StackTab from "../components/StackTab/StackTab";

const PortfolioPage = () => {

    return (
        <PortfolioLayout>
            <AppBarComponent />
            <PresentationComponent />
            <PreviousJobs />
            <ExperienceTab />
            <ProjectsSection />
            <StackTab />
            <AboutMeComponent />
            <ContactComponent />
            <ImageDialog />
            <SimpleDialog />
            <SimpleSnackbar />
        </PortfolioLayout>
    )
}

export default PortfolioPage;