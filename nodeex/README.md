<h1> About NodeJS </h1>
<hr>

<p> Before that, we shoud know a little background of JS, since it is highly responsible in making of NodeJS </p>

<ul> JS
  <li> Dec-4, 1995 JS got launched </li>
  <li> Used for websites or web designing </li>
  <li> A programming language which runs on machine (browser) </li>
</ul>


<code> JS runs on browser with the help of JSE<i> (Javascript Engine) </i> </code>
<br>
<code> JSE is nothing but a compiler which translated the JS code into machine code which browers understands easily </code>
# Those browser not having JSE, will not be able to run the JS code 

<ul> Which JSE is best ?
  <li> First JSE was Spider Monkey, which was Developed at Netscape. </li>
  <li> Then Internet Explorer created their own JSE called <i> CHAKRA </i> </li>
  <li> Google Chrome smartly analysed CHAKRA and came up with the fastest JSE called V8 </li>
</ul>


<ul> Now the question arises, how NODEJS came into picture ? 
  <li> Earlier, in backend there were PHP, Java, ASP  </li>
  <li> And in front-end: HTML, CSS and JS</li>
  <li> And we needed to know both the domains for the execution </li>
  <li> JS was getting used wisely in browser, desktop, phone and on web-server. </li>
  <br>
  
  <code> Now to run the JS on the machine, there was a requirement of Runtime-Environment </code> 

</ul>

# and that's where NodeJS gets created 🔥🔥🙌🙌

<hr>

<ul> Node JS
  <li> At first, it is a runt-time environment </li>
  <li> Simple JS code runs here</li>
  <li> It can create web-application</li>
  <li> Used in creating Web-Services</li>
  
</ul>

<hr>

<ul> <code> Few key points on NodeJS </code>
  <li> It is not a language</li>
  <li> JS runs easily on it</li>
  <li> With the help of it, now JS can be used in back-end, front-end and in database as well</li>
  <li> NodeJS used as a backend server </li>
  
</ul>
<hr>

# III. How NodeJS works ?

<dl>
  <dt>Let's say a client request "Cricket Live Score" to the server </dt>
  <dt> Now the server can do the three things: </dt>
  <dd> 1. Pass that request to the new server</dd>
  <dd> 2. Pass that request to the database <dd>
  <dd> 3. Pass that request to the file system </dd>
  
  <dt> In case of passing the request to another server, it might take some time to get the response(let's say 2 seconds)</dt>
  <dt> For 1 client, it will take 2 seconds and in case of 5 clients, the 5th client will get the response in the 10th second.</dt>
  <dt> <code> There should be multiple request handling system </code> </dt>
 

</dl>
<br>
<div>
  <code> Java uses Tomcat server for handling multiple request through multiple thread concept. </code>
  <h3> We all know, JS doesn't support Multiple Thread </h3>
  <code> And also, NodeJS have only single thread </code>
</div>
<br>

<div>
  <h2> IV. Question arises here, how NodeJS handles multiple clients/requests?  </h2> 
  <dl> NodeJS is a single threaded application and can only accept requests </dl>
  <dt> It works on 2 ways: </dt>
  <dd> a. Non-blocking I/O </dd>
  <dd> b. Asynchronous </dd>
  
</div>


<div>
  <h2> V. How Does Non-Blocking I/O works ? </h2> 
  <dl> Client <code> C1 </code> request to the NodeJS web-server </dl>
  <dl> The single thread <code> T </code> will send that requests to the workers which works for the NodeJS server </dl>
  <dl> Now this thread <code> T </code> will not be blocked for <code> C1 </code>  and accessible to other clients as well </dl>
  <dl> Same like <code>C1 </code>, another client <code> C2 </code> request to Thread <code>T</code> and the same thing will happen </dl>
  <dl> This thread <code> T </code> will send that request to another worker </dl>
  <dl> And will not be blocked for the client <code> C2  </code>   and will be accessible to other clients as well </dl>
  
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
  <dt> It provides the concept of Non-Blocking I/o </dt>
  <dt> It build in C-lang which uses System Kernel which has Multiple Thread </dt>
  <dl> And these workers are nothing but Threads </dl>

</div>
