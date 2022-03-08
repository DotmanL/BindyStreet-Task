using System.Collections.Generic;

namespace BindyStreetApi.Models
{
  public interface IUserRepository
  {
    IEnumerable<UserModel> GetAll();

  }
}