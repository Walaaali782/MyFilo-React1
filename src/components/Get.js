

function Get() {
    return(
<div class="get nmbl pt-5  position-relative" id="get">

<div class="container">
    <div class="main-title  mt-5 mb-5 position-relative">
      <div class="all">    </div>
      <h1>GET IN TOUCH</h1>
    </div>
<div class="getbox flex ">

  <form id="registerForm" class="flex flex-column m-5 position-relative text-center">
    <div class="name flex ">
    <input type="text" id="username" name="username" 
placeholder="FirstName"class=" m-15 p-15" required/>
      
      <input type="text" id="username" name="username" 
placeholder="LastName"class="        m-15 p-15"  required/>
</div>
    
    <input type="email" id="email" name="email" placeholder="Email"class="m-15 p-15"  required/>


        <textarea id="message" name="message" rows="5"  placeholder="Massage"class="m-15 p-15"   required></textarea>
   
        <button type="submit" class="sub m-15 p-15">Send</button>
    


</form>


<div class="two m-15 p-15 m-5 position-relative">

<p>CONTACT INFO</p> 

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro fugit cum doloremque provident laboriosam iure. 
</p>

<div class="two1 flex">
<i class="fa-solid fa-location-crosshairs"></i>
<div class="nmk"> Address:  </div> 
</div>

<div class="nmks">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, numquam.</div>


<div class="two1 flex">
<i class="fa-solid fa-envelope"></i>
<div class="nmk">Email:walaaalihassan9@gmail.com </div>
</div> 
<div class="nmks">abelisraelromero@gmail.com </div>

<div class="two1 flex pb-6">
<i class="fa-solid fa-mobile"></i>
<div class="nmk">Phone:+52 671 114 3273</div>
</div>
 
<div class="two1 flex pb-6">
<i class="fa-solid fa-blender-phone"></i>
<div class="nmk">office - Beans studio</div>
</div>

<div class="two1 flex pb-6">
<i class="fa-brands fa-skype"></i>
<div class="nmk"></div>Skype: sadfasd.skype</div>
</div>
</div>

</div>





</div>


    )
    
}
export default Get;
