import { Link } from "react-router-dom";
import Teamwork from "../assets/teamwork.png";
import Ideas from "../assets/ideas.png";

function Home() {
    return (
      <div>
          <div className="row">
            <div className="column">
              <div className="container">
                <img src={Teamwork} />
              </div>
            </div>
            <div className="column orange">
              <div className="container">
                <strong>RENI, (Research, Evaluation, and Networking Initiative)</strong> is an independent organization that aims to bridge the gap between research and practice, funding and evaluation, and clients and service providers.
              </div>
            </div>
          </div>
  
        <div className="container navy">
          <div>Although many organizations have begun using statistics few have enough data to guide planning, management systems, or redirect and redesign underperforming programs or services. The real data from National Center on Charitable Statistics reveals that approximately <strong>30% of nonprofits fail</strong> to exist after 10 years, and according to Forbes, over half of all nonprofits that are chartered are destined to fail or stall within a few years due to leadership issues, lack of a strategic plan, lack of relevant and accessible services, among other things.</div>
        </div>

        <div className="container">
          <div className="row">
            <div className="column disappear">
              <img src={Ideas} />
            </div>
            <div className="column">
              <div>RENI provides consultation on program design, implementation, and evaluation to community service providers (non-profits, counseling centers, community corporations, etc.) to establish research based practices and enhance client centered goals.</div>
              <div style={{paddingTop: "40px"}}>
              <button className="orange"><Link to="/contact">Connect with us.</Link></button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
  
  export default Home;