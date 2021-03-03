<template>
  <div class="container">
    <div style="padding-top: 150px"></div>
      <div class="d-xl-flex justify-content-between align-items-start">
        <div class="col-12 col-xl-8">
          <div class="home-picture-login" style="background-image: url('/assets/images/img/home-picture-login.png');"></div>
        </div>
        <div class="col-12 col-xl-4">
          <div class="login-card d-flex justify-content-center align-items-center" v-if="!registerCard">
            <div class="d-flex">
              <div class="col-12">
                <div class="text-center">
                  <h5>Login</h5>
                </div>
                <div class="d-flex justify-content-center align-items-center py-2">
                  <div class="login-icon d-flex align-items-center">
                    <i class="far fa-user"></i>
                  </div>
                  <input class="login-input" placeholder="email" v-model="loginData.email" type="text" />
                </div>
                <div class="d-flex justify-content-center align-items-center py-2">
                  <div class="login-icon d-flex align-items-center">
                    <i class="fas fa-key"></i>
                  </div>
                  <input class="login-input" placeholder="Password" v-model="loginData.password" type="text" />
                </div>
                <div class="d-flex justify-content-center align-items-center">
                  <div class="d-xl-flex align-items-center">
                    <label class="checkbox-input text-left">
                      Remember me
                      <input type="checkbox" />
                      <span style="border-radius: 10px" class="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div class="text-center submit-contact-us-button">
                  <button class="btn btn-sm" @click="login()">Login</button>
                </div>
                <div class="text-center">
                  <div><small>Don't have an account? <a href="#" @click="registerCard = true">Register</a></small></div>
                  <div><small>I forgot my password</small></div>
                </div>
              </div>
            </div>
          </div>
          <div class="login-card d-flex justify-content-center align-items-center" v-else>
            <div class="d-flex">
              <div class="col-12">
                <div class="text-center">
                  <h5>What a pleasure to see you among us :)</h5>
                  <small>Let's register quickly!</small>
                </div>

                <div class="d-flex justify-content-center align-items-center py-2">
                  <div class="register-icon d-flex align-items-center">
                    <i class="far fa-id-card"></i>
                  </div>
                  <input class="register-input" placeholder="Your name, surname" v-model="registerData.name" type="text" />
                </div>

                <div class="d-flex justify-content-center align-items-center py-2">
                  <div class="register-icon d-flex align-items-center">
                    <i class="far fa-envelope"></i>
                  </div>
                  <input class="register-input" placeholder="Your e-mail" v-model="registerData.email"  type="email" />
                </div>

                <div class="d-flex justify-content-center align-items-center py-2">
                  <div class="register-icon d-flex align-items-center">
                    <i class="fas fa-birthday-cake"></i>
                  </div>
                  <!--DATE OF YEAR-->
                  <select class="register-select">
                    <option value="">Birthyear..</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                    <option value="1989">1989</option>
                    <option value="1988">1988</option>
                    <option value="1987">1987</option>
                    <option value="1986">1986</option>
                    <option value="1985">1985</option>
                    <option value="1984">1984</option>
                    <option value="1983">1983</option>
                    <option value="1982">1982</option>
                    <option value="1981">1981</option>
                    <option value="1980">1980</option>
                    <option value="1979">1979</option>
                    <option value="1978">1978</option>
                    <option value="1977">1977</option>
                    <option value="1976">1976</option>
                    <option value="1975">1975</option>
                    <option value="1974">1974</option>
                    <option value="1973">1973</option>
                    <option value="1972">1972</option>
                    <option value="1971">1971</option>
                    <option value="1970">1970</option>
                    <option value="1969">1969</option>
                    <option value="1968">1968</option>
                    <option value="1967">1967</option>
                    <option value="1966">1966</option>
                    <option value="1965">1965</option>
                    <option value="1964">1964</option>
                    <option value="1963">1963</option>
                    <option value="1962">1962</option>
                    <option value="1961">1961</option>
                    <option value="1960">1960</option>
                    <option value="1959">1959</option>
                    <option value="1958">1958</option>
                    <option value="1957">1957</option>
                    <option value="1956">1956</option>
                    <option value="1955">1955</option>
                    <option value="1954">1954</option>
                    <option value="1953">1953</option>
                    <option value="1952">1952</option>
                    <option value="1951">1951</option>
                    <option value="1950">1950</option>
                    <option value="1949">1949</option>
                    <option value="1948">1948</option>
                    <option value="1947">1947</option>
                    <option value="1946">1946</option>
                    <option value="1945">1945</option>
                    <option value="1944">1944</option>
                    <option value="1943">1943</option>
                    <option value="1942">1942</option>
                    <option value="1941">1941</option>
                    <option value="1940">1940</option>
                    <option value="1939">1939</option>
                    <option value="1938">1938</option>
                    <option value="1937">1937</option>
                    <option value="1936">1936</option>
                    <option value="1935">1935</option>
                    <option value="1934">1934</option>
                    <option value="1933">1933</option>
                    <option value="1932">1932</option>
                    <option value="1931">1931</option>
                    <option value="1930">1930</option>
                  </select>
                  <!--/DATE OF YEAR-->
                </div>

                <div class="d-flex justify-content-center align-items-center py-2">
                  <div class="register-icon d-flex align-items-center">
                    <i class="fas fa-globe-europe"></i>
                  </div>
                  <!--COUNTRY-->
                  <select class="register-select">
                    <option value="Afganistan">Afghanistan</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="American Samoa">American Samoa</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Aruba">Aruba</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bosnia">Bosnia & Herzegovina</option>
                    <option value="Botswana">Botswana</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo">Congo</option>
                    <option value="Cook Islands">Cook Islands</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Curaco">Curacao</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">Dominican Republic</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Germany">Germany</option>
                    <option value="Greece">Greece</option>
                    <option value="Greenland">Greenland</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Hawaii">Hawaii</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="India">India</option>
                    <option value="Iran">Iran</option>
                    <option value="Iraq">Iraq</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Korea">Korea</option>
                    <option value="Laos">Laos</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libya">Libya</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Macau">Macau</option>
                    <option value="Macedonia">Macedonia</option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Moldova">Moldova</option>
                    <option value="Monaco">Monaco</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Norfolk Island">Norfolk Island</option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau Island">Palau Island</option>
                    <option value="Palestine">Palestine</option>
                    <option value="Papua New Guinea">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Phillipines">Philippines</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Puerto Rico">Puerto Rico</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Romania">Romania</option>
                    <option value="Russia">Russia</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Slovakia">Slovakia</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Spain">Spain</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Swaziland">Swaziland</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syria">Syria</option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Togo">Togo</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Uganda">Uganda</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Erimates">United Arab Emirates</option>
                    <option value="United States of America">United States of America</option>
                    <option value="Uraguay">Uruguay</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Wake Island">Wake Island</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                  </select>
                  <!--/COUNTRY-->
                </div>

                <div class="d-flex justify-content-center align-items-center py-2">
                  <div class="register-icon d-flex align-items-center">
                    <i class="fas fa-key"></i>
                  </div>
                  <input class="register-input" placeholder="Password"  v-model="registerData.password"  type="text" />
                </div>
                <div class="d-flex justify-content-center align-items-center">
                  <div class="d-xl-flex align-items-center">
                    <label class="checkbox-input text-left">
                      I accept the terms of use
                      <input type="checkbox" />
                      <span style="border-radius: 10px" class="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div class="text-center submit-contact-us-button">
                  <button class="btn btn-sm" @click="register()">Register</button>
                </div>
                <div class="text-center">
                  <div><small>I already <a href="#" @click="registerCard = false">have an account </a></small></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Start',
  data() {
    return {
      registerCard: false,
      loginData: {
        email: null,
        password: null,
      },
      registerData: {
        name: null,
        email: null,
        password: null,
      },
    }
  },
  methods: {
    register() {
      axios
      .post('https://guess-what-rank-api.herokuapp.com/api/register', {
        name: this.registerData.name,
        email: this.registerData.email,
        password: this.registerData.password,
        password_confirmation: this.registerData.password,
      })
      .then((response) => {
        console.log(response);
      })
    },
    login() {
      axios
      .post('https://guess-what-rank-api.herokuapp.com/api/login', {
        email: this.loginData.email,
        password: this.loginData.password,
      })
      .then((response) => {
        localStorage.setItem("access_token", response.data.result.data.access_token);
        console.log(response)
        console.log(localStorage.getItem('access_token'));
        this.$router.push({name: 'Category'})
      })
    }
  },
}
</script>


<style scoped>
.login-card {
  width: 100%;
  min-height: 500px;
  border-radius: 20px;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.home-picture-login {
  background-position: revert;
  position: absolute;
  background-repeat: no-repeat;
  background-size: 600px;
  width: 100%;
  height: 600px;
}

@media screen and (max-width: 852px) {
  .home-picture-login {
    display: none;
  }
}

.login-input {
  height: 40px;
  border-radius: 0 15px 15px 0;
  border: none;
  background-color: white;
  outline:none
}

.register-input {
  height: 40px;
  border-radius: 0 15px 15px 0;
  border: none;
  background-color: white;
  outline:none
}

.register-icon {
  height: 40px;
  background-color: white;
  border: none;
  width: 30px;
  padding: 0 30px 0 10px;
  border-radius: 15px 0 0 15px;
}

.login-icon {
  height: 40px;
  background-color: white;
  border: none;
  width: 30px;
  padding: 0 30px 0 10px;
  border-radius: 15px 0 0 15px;
}

.register-select {
  height: 40px;
  border-radius: 0 15px 15px 0;
  border: none;
  background-color: white;
  outline:none;
  width: 180px;
}

.checkbox-input {
  font-weight: bold;
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.checkbox-input input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: white;
  border-radius: 8px;
}

.checkbox-input:hover input ~ .checkmark {
  background-color: white;
}

.checkbox-input input:checked ~ .checkmark {
  background-color: #20d489;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-input input:checked ~ .checkmark:after {
  display: block;
}

.checkbox-input .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.submit-contact-us-button button {
  border-radius: 10px;
  background-color: #20D489;
  color: white;
  font-weight: bold;
  min-width: 100px;
}

.submit-contact-us-button button:hover {
  background-color: #28ffa7;
  font-weight: bold;
  color: white;
}


.form-report-error select {
  color: #5E6278;
  outline: 0;
  border: none;
  background-color: white;
  height: 45px;
  border-radius: 8px;
}</style>