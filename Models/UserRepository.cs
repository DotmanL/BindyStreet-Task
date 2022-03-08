using System;
using System.Collections.Generic;

namespace BindyStreetApi.Models
{
  public class UserRepository : IUserRepository
  {
    private List<UserModel> users = new List<UserModel>();
    private int _nextid = 1;

    public UserRepository()
    {

      Add(new UserModel
      {
        id = 1,
        name = "Leanne Graham",
        username = "Bret",
        email = "Sincere@april.biz",
        address = new Address
        {
          street = "Kulas Light",
          suite = "Apt. 556",
          city = "Gwenborough",
          zipcode = "92998-3874",
          geo = new Geo
          {
            lat = "-37.3159",
            lng = "81.1496",
          },
        },
        phone = "1-770-736-8031 x56442",
        website = "hildegard.org",
        company = new Company
        {
          name = "Romaguera-Crona",
          catchPhrase = "Multi-layered client-server neural-net",
          bs = "harness real-time e-markets",
        },
      });
      Add(new UserModel
      {
        id = 2,
        name = "Ervin Howell",
        username = "Antonette",
        email = "Shanna@melissa.tv",
        address = new Address
        {
          street = "Victor Plains",
          suite = "Suite 879",
          city = "Wisokyburgh",
          zipcode = "90566-7771",
          geo = new Geo
          {
            lat = "-43.9509",
            lng = "-34.4618",
          },
        },
        phone = "010-692-6593 x09125",
        website = "anastasia.net",
        company = new Company
        {
          name = "Deckow-Cris",
          catchPhrase = "Proactive didactic contingency",
          bs = "synergize scalable supply-chains",
        },
      });
    }

    public IEnumerable<UserModel> GetAll()
    {
      return users;
    }
    public UserModel Add(UserModel item)
    {
      if (item == null)
      {
        throw new ArgumentNullException("item");
      }
      item.id = _nextid++;
      users.Add(item);
      return item;
    }
  }
}