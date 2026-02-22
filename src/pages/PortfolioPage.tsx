import AboutMeTab from "../components/AboutMeTab/AboutMeTab";
import AppBarComponent from "../components/AppBar/AppBar";
import ContactComponent from "../components/Contact/ContactComponent";
import ExperienceTab from "../components/ExperienceTab/ExperienceTab";
import ImageDialog from "../components/ImageDialog/ImageDialog";
import PresentationComponent from "../components/Presentation/Presentation";
import PreviousJobs from "../components/PreviousJobs/PreviousJobs";
import ProjectsSection from "../components/ProjectsComponent/ProjectsTab";
import SimpleSnackbar from "../components/shared/snackbar/SnackBarComponent";
import SimpleDialog from "../components/SimpleDialog/SimpleDialog";
import StackTab from "../components/StackTab/StackTab";
import PortfolioLayout from "../layout/PortfolioLayout";

const PortfolioPage = () => {

    return (
        <PortfolioLayout>
            <AppBarComponent />
            <PresentationComponent />
            <AboutMeTab />
            <PreviousJobs />
            <ExperienceTab />
            <ProjectsSection />
            <StackTab />
            <ContactComponent />
            <ImageDialog />
            <SimpleDialog />
            <SimpleSnackbar />
        </PortfolioLayout>
    )
}

export default PortfolioPage;