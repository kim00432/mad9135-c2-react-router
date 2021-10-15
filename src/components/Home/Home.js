import './home.css'

export default function Home() {
    return (
        <div>
          <h1>Welcome to Random User Site</h1>
          <div className="instructions">
            <ul>
              <li className="instructions_list">This site lets you get information of random users.</li>
              <li className="instructions_list">Whenever you refresh this site, you can see a list of users between 16 and 32 randomly.</li>
              <li className="instructions_list">You can click one of navigation bar or type each route to link to each page directly.</li>
              <li className="instructions_list">If you manually adds a URL that has no match then the app should redirect to the Home page.</li>
              <li className="instructions_list">
                <div className="li_title">User list page ('/users/' route)</div>
                <ul className="ul_list">
                  <li>- It shows a list of user cards that display the values for name, emails, cell, plus a image of each user.</li>
                  <li>- If you click one of displayed cards, you can see more details of the selected user on a 'User Details page'.</li>
                </ul>
              </li>
              <li className="instructions_list">
                <div className="li_title">User details page ('/users/:id' route)</div>
                <ul className="ul_list">
                  <li>- It shows the selected user's full address, login information, and a larger image.</li>
                </ul>
              </li>
              <li className="instructions_list">
                <div className="li_title">Address List page ('/addresses' route)</div>
                <ul className="ul_list">
                  <li>- You can see a list of the names and addresses sorted by last name.</li>
                  <li>- There is a link which is connected to the User Details page.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
    )
}
