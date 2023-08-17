import React from "react";
import "@fontsource/poppins"; // or import the specific font weight and styles you need

const App = () => {
  return (
    <div>
      {/* <div>
        <header>
          <h2>Create an account</h2>
        </header>
      </div> */}
      <section class="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-4">
              <div class="main-container rounded-0 text-black">
                <div class="row g-0">
                  <div class="col-lg-12">
                    <div class="card-body">
                      <div class="text-center">
                        <h4 class="mt-1 mb-2 mt-4 pb-1">
                          <b>
                            Create an{" "}
                            <span style={{ color: "#CD1479" }}>account</span>
                          </b>
                        </h4>
                      </div>

                      <form class="p-4">
                        <p class="text-center paragraph">Tell us a bit about yourself</p>

                        <div class='p-3'>
                        <input
                          type="name"
                          id="name"
                          class=" form-outline p-1 mb-3 inputType"
                          placeholder="Full Name"
                        />

                        <input
                          type="email"
                          id="email"
                          class=" form-outline p-1 mb-3 inputType"
                          placeholder="Email"
                        />
                        </div>
                        
                        <p class="text-center paragraph ">What’s your mobile number?</p>

                        <div class='p-3'>
                        <input
                          type="name"
                          id="name"
                          class=" form-outline p-1 mb-3 inputType"
                          placeholder="Enter mobile number"
                          
                        />

                        <input
                          type="email"
                          id="email"
                          class=" form-outline p-1 mb-3 inputType"
                          placeholder="Enter OTP"
                          style={{}}
                        />
                        <p style={{fontSize:"9px", color:"#555555"}}>You'll receive OTP in<span style={{color:"#CD1479"}}>10s</span></p>
                        </div>

                        <div class="text-center p-3 mt-2">
                          <button
                            class="btn btn-primary btn-block fa-lg btn1 mb-3"
                            type="button"
                          >
                            Create account
                          </button>
                          <button
                            class="btn btn-primary btn-block fa-lg btn2 mb-3"
                            type="button"
                          >
                            Sign up with google
                          </button>
                          

                        </div>

                        <div class="d-flex align-items-center justify-content-center pb-4">
                          <p class="mb-0 me-2">Already have an account?</p>
                          <a class="link" href="#!">
                            Log in
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
