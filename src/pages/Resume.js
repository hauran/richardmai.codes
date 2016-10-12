import '../less/resume_web.less'
import classNames from 'classnames'

import LinkIcon from 'react-icons/io/ios-arrow-thin-right'
import PhoneIcon from 'react-icons/io/ios-telephone-outline'
import EmailIcon from 'react-icons/io/ios-email-outline'

const Resume = (p) => {
  return (
    <section id='resume'>
      <header id='main'>
        <section className='name'>
          <h1>Richard Mai</h1>
          <section className='about'>
            <div className='title'>Software Engineer</div>
            <div className='description'>
              Full-stack software engineer with 15 years of experience architecting and implementing software solutions spanning across web, mobile, and desktop environments.
            </div>
          </section>
        </section>
        <section className='contact'>
          <div><a href='tel:1-917-882-2001'><PhoneIcon size={20} color='#999999'/>917.882.2001</a></div>
          <div><a href='mailto:richardmai@gmail.com'><EmailIcon size={20} color='#999999'/>richardmai@gmail.com</a></div>
        </section>
      </header>



      <section className='section' id='projects'>
        <h2>Projects</h2>


        <section className='main-item'>
          <header>
            <a href='http://ourmix.com'><h3>OurMix</h3></a>
            <div><LinkIcon size={15} color='#999999'/></div>
          </header>
          <section className='details'>
            <div className='title-dates'>
              Co-Founder<span>|</span>Sep 2014 – Jan 2016
            </div>
            <div className='description'>
              Social music app that automatically shares music with friends, sending users a personalized mix every day based on their taste profile.
            </div>
          </section>
          <ul>
            <li>
              Architected and managed entire technology stack including deployment, servers, databases and caches.
            </li>
              <li>
                Built mix generation algorithm using Spotify API.
              </li>
            <li>
              Featured in TechCrunch's <a href='https://techcrunch.com/2016/01/15/ourmix-is-social-music-discovery-done-right/'><i>OurMix Is Social Music Discovery Done Right.</i></a>
            </li>
            <li>
              Partnered with a UI designer and product manager.
            </li>
            <li>
              iOS and Android versions available.
            </li>
          </ul>
        </section>


        <section className='main-item'>
          <header>
            <a href='http://discoverondemand.com'><h3>Discover on Demand</h3></a>
            <div><LinkIcon size={15} color='#999999'/></div>
          </header>
          <section className='details'>
            <div className='title-dates'>
              Founder<span>|</span>Feb 2016 – May 2016
            </div>
            <div className='description'>
              On-demand music discovery app that gives users custom-made music recommendations.
            </div>
          </section>
          <ul>
            <li>
              Provides on-demand personalized music discovery, tailored specifically to the user.
            </li>
            <li>
              Mac OSX and iOS versions available.
            </li>
          </ul>
        </section>



        <section className='main-item'>
          <header>
            <a href='http://everyonesmixtape.com'><h3>Everyone's Mixtape</h3></a>
            <div><LinkIcon size={15} color='#999999'/></div>
          </header>
          <section className='details'>
            <div className='title-dates'>
              Founder<span>|</span>Sep 2011 – Jan 2012
            </div>
            <div className='description'>
              Social and collaborative mixtapes.
            </div>
          </section>
          <ul>
            <li>
              Attracted over 59,000 unique visitors in a single day.
            </li>
            <li>
              Featured in <a href='http://thenextweb.com/apps/2011/12/21/mixtapes-go-social-with-the-brilliant-app-everyones-mixtape/#gref'>The Next Web</a>, and <a href='http://observer.com/2011/12/everyones-mixtape-12212011/'>Observer</a>, <a href='http://lifehacker.com/5870202/everyones-mixtape-is-a-socially-curated-playlist-creator'>Lifehacker</a>.
            </li>
            <li>
              Winner of the Echo Nest hack at the Feb 24, 2012 Spotify Music Apps Hack Weekend.
            </li>
          </ul>
        </section>


        <section className='main-item'>
          <header>
            <a href='http://whatsoffline.com'><h3>Offline</h3></a>
            <div><LinkIcon size={15} color='#999999'/></div>
          </header>
          <section className='details'>
            <div className='title-dates'>
              Founder<span>|</span>Dec 2013 – Mar 2014
            </div>
            <div className='description'>
              Search for places to eat, drink, or just about anything off of a subway line.
            </div>
          </section>
          <ul>
            <li>
              Developed a way to search entire subway lines looking within a 5-block radius of each subway stop.
            </li>
            <li>
              Integrated Yelp, Google Maps and NYC MTA data.
            </li>
            <li>
              iOS and web versions available.
            </li>
          </ul>
        </section>
      </section>



      <section className='section' id='work'>
        <h2>Work Experience</h2>
        <section className='main-item'>
          <header>
            <a href='http://glg.it'><h3>Gerson Lehrman Group</h3></a>
            <div><LinkIcon size={15} color='#999999'/></div>
          </header>
          <section className='details'>
            <div className='title-dates'>
              Senior Engineer<span>|</span>May 2012 – Present
            </div>
          </section>
          <ul>
            <li>
              Saved over $200,000/year in staff costs by creating an app for experts to request expense reimbursements themselves, which was previously the responsibility of 3 full-time employees.
            </li>
            <li>
              Created cron job, which added back over 30,000 experts to the available expert network that were previously removed but forgotten, resulting in over 3,000 staffed projects and $250,000 in revenue in about 6 months.
            </li>
            <li>
              Decreased time from project request to scheduling by 30% by changing core workflow to be done in parallel instead of serial.
            </li>
            <li>
              Introduced and mentored team to new technologies such as React/Redux and RiotJS.
            </li>
            <li>
              Helped migrate companies large legacy C# app to dedicated NodeJS micro apps resulting in huge productivity boosts.
            </li>
          </ul>
        </section>


        <section className='main-item'>
          <header>
            <a href='http://barcap.com'><h3>Barclays Capital</h3></a>
            <div><LinkIcon size={15} color='#999999'/></div>
          </header>
          <section className='details'>
            <div className='title-dates'>
              Lead Engineer<span>|</span>Sep 2008 – May 2012
            </div>
          </section>
          <ul>
            <li>
              Coordinated global rollout of applications after Lehman Brothers/Barclays Capital merger.
            </li>
            <li>
              Collaborated with users and business analysis team to create requirement documents.
            </li>
            <li>
              Conducted code reviews with junior and offshore developers to look for potential performance enhancements, bugs, or user interface improvements.
            </li>
          </ul>
        </section>

        <section className='main-item'>
          <header>
            <h3>Lehman Brothers</h3>
          </header>
          <section className='details'>
            <div className='title-dates'>
              Engineer<span>|</span>Sep 2001 – Sep 2008
            </div>
          </section>
          <ul>
            <li>
              Built customizable dashboard allowing users to fully personalize layout and content.
              Dashboard was designed to work with new widgets and existing content, allowing for gradual decommission of legacy application.
            </li>
            <li>
              Managed offshore development team to port over existing content into the new widget format.
            </li>
            <li>
              Generated business and opened channels of communication with a client marketing engine, which allowed bankers to market achievements to targeted contacts on a large scale with a personal touch.
            </li>
            <li>
              Created bankers’ homepage, notifying them of upcoming meetings, any required follow-ups, contacts’ promotions, and other information to keep users informed and empowered.
            </li>
          </ul>
        </section>

      </section>

      <section className='section' id='education'>
        <h2>Education</h2>

        <section className='main-item'>
          <header>
            <h3>Stony Brook University Honors College</h3>
          </header>
          <section className='details'>
            <div className='title-dates'>
              Bachelor of Science - Computer Engineering<span>|</span>Sep, 1997 – May, 2001
            </div>
          </section>
        </section>
      </section>
    </section>
  )
}
export default Resume
