<h1> About NodeJS </h1>
<hr>

<p> Before that, we shoud know a little background of JS, since it is highly responsible in making of NodeJS </p>
<img src="https://raw.githubusercontent.com/asishraz/UI_revision/master/nodeex/first_js.JPG" width="100%">
<br>
<hr>
<img src="https://raw.githubusercontent.com/asishraz/UI_revision/master/nodeex/use_of_js.JPG">

<code> JS runs on browser with the help of JSE<i> (Javascript Engine) </i> </code>
<br>
<hr>
<img src="https://raw.githubusercontent.com/asishraz/UI_revision/master/nodeex/jse.JPG">
<code> JSE is nothing but a compiler which translated the JS code into machine code which browers understands easily </code>
<br>

# Those browser not having JSE, will not be able to run the JS code 
<hr>

<img src="https://raw.githubusercontent.com/asishraz/UI_revision/master/nodeex/popular_jse.JPG">


<ul> Now the question arises, how NODEJS came into picture ? 
  <br>
  <img src="https://raw.githubusercontent.com/asishraz/UI_revision/master/nodeex/both_domain.JPG">
  
  <li> JS was getting used wisely in browser, desktop, phone and on web-server. </li>
  <br>
  
  <code> Now to run the JS on the machine, there was a requirement of Runtime-Environment </code> 

</ul>

# and that's where NodeJS gets created 🔥🔥🙌🙌

<hr>

<h1> Node JS </h1>
<img src="https://raw.githubusercontent.com/asishraz/UI_revision/master/nodeex/nodejs.JPG">

<hr>

<ul> <code> Few key points on NodeJS </code>
  <li> With the help of it, now JS can be used in back-end, front-end and in database as well</li>
  <li> NodeJS used as a backend server </li>
  
</ul>
<hr>

# III. How NodeJS works ?

<dl>
  <img src="https://raw.githubusercontent.com/asishraz/UI_revision/master/nodeex/client_request.JPG">
  <dt>Let's say a client request "Cricket Live Score" to the server </dt>
  <dt> Now the server can do the three things: </dt>
  <dd> 1. Pass that request to the new server</dd>
  <dd> 2. Pass that request to the database <dd>
  <dd> 3. Pass that request to the file system </dd>
  
  <dt> In case of passing the request to another server, it might take some time to get the response(let's say 2 seconds)</dt>
  <br>
  <img src="https://raw.githubusercontent.com/asishraz/UI_revision/master/nodeex/multiple_client.JPG">
  <br>
  <dt> For 1 client, it will take 2 seconds and in case of 5 clients, the 5th client will get the response in the 10th second.</dt>
  <dt> <code> There should be multiple request handling system </code> </dt>
 

</dl>
<br>
<div>
  <code> Java uses Tomcat server for handling multiple request through multiple thread concept. </code>
  <br>
  <img src="https://raw.githubusercontent.com/asishraz/UI_revision/master/nodeex/java.JPG">
  <br>
  <h3> We all know, JS doesn't support Multiple Thread </h3>
  <code> And also, NodeJS have only single thread </code>
</div>
<br>

<div>
  <h2> IV. Question arises here, how NodeJS handles multiple clients/requests?  </h2> 
  <br>
  <img src="https://raw.githubusercontent.com/asishraz/UI_revision/master/nodeex/nodejs_2ways.JPG">
  
</div>


<div>
  <h2> V. How Does Non-Blocking I/O works ? </h2> 
  <dl> Client <code> C1 </code> request to the NodeJS web-server </dl>
  <br>
  <img src="https://raw.githubusercontent.com/asishraz/UI_revision/master/nodeex/nonblocking_first.JPG">
  <br>
  <dl> The single thread <code> T </code> will send that requests to the workers which works for the NodeJS server </dl>
  <dl> Now this thread <code> T </code> will not be blocked for <code> C1 </code>  and accessible to other clients as well </dl>
  <dl> Same like <code>C1 </code>, another client <code> C2 </code> request to Thread <code>T</code> and the same thing will happen </dl>
  <dl> This thread <code> T </code> will send that request to another worker </dl>
  <dl> And will not be blocked for the client <code> C2  </code>   and will be accessible to other clients as well </dl>
  <br>
  <img src="https://raw.githubusercontent.com/asishraz/UI_revision/master/nodeex/nonblocking_second.JPG">
  
</div>

``` 
This is the way Non-blocking I/O works by not blocking itself for 1 client/request 

```
<hr>
<code> This is the simple example of client/server request/response. </code>

<div> 
  <h2> VI. What happens, in case of Intense Work(like, huge calculation) ? </h2>
  - NodeJS works fine in I/O Intensive work and not in CPU Intensive work 
</div>
<hr>

<div>
  <h2> VI. If NodeJS doesn't support multiple threads, then how this workers are created? [<i>What are they, if not multiple thread?</i>] </h2>
  <dl> <code> Libuv </code> is a special library build for NodeJS </dl>
  <br>
  <img src="https://raw.githubusercontent.com/asishraz/UI_revision/master/nodeex/libuv.JPG">
  <hr>
  <dl> And these workers are nothing but Threads </dl>

</div>
