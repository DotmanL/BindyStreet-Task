using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace BindyStreetApi.Controllers
{
  [ApiController]
  public class UsersController : ControllerBase
  {

    private readonly ILogger<UsersController> _logger;

    static readonly Models.IUserRepository repository = new Models.UserRepository();

    public UsersController(ILogger<UsersController> logger)
    {
      _logger = logger;
    }

    [HttpGet]
    [Route("api/users")]
    public IEnumerable<Models.UserModel> GetAllUsers()
    {
      return repository.GetAll();
    }


  }
}