
import Footer from "./Footer"
import Main from "./Main"
import Navigation from "./Navigation"


interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <>


            <div className="layout">
                <Navigation />
                <Main>
                    {children}
                </Main>
                
                <Footer />
            </div>
        </>
    );
}

export default Layout;