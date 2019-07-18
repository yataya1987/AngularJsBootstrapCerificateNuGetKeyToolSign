using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using CouchbaseAspNet.Identity.CoreSessionHandlerAPI;

[assembly: OwinStartup(typeof(CouchbaseAspNet.Identity.CoreSessionHandlerAPI.Startup))]

namespace CouchbaseAspNet.Identity.CoreSessionHandler
{
	public  class StartupCoreAPI
	{
		private Startup startup = new Startup();
		public void Configuration(IAppBuilder app)
		{
			startup.ConfigureAuth(app);
			// For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=316888
		}

		
	}
}
