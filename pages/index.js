const Index = () => (
  <div>
    <h1>Hello World!! Knex, Pg, Env2 time</h1>
    <p>Insert your email here please</p>

    <form action="/api/mailing-list/submit" method="post">
      First Name
      <input type="text" name="first_name" />
      Last Name
      <input type="text" name="last_name" />
      Email
      <input type="text" name="email" />
      <input type="submit" />
    </form>
  </div>
)

export default Index
