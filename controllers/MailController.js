const express = require("express");
const nodemailer = require("nodemailer");

exports.sendOrderPlacedMail = async (
  email,
  names,
  image,
  qty,
  price,
  city,
  state,
  address,
  pname
) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    auth: {
      user: "insuranceproject377@gmail.com",
      pass: "dapfwnqlvwefjcun",
    },
  });

  let maillist = [email, "fakeb82@gmail.com"];

  maillist.toString();

  const mailData = {
    from: {
      name: `Nj Automations`,
      address: "sales@njautomation.in",
    },
    to: maillist,
    subject: `Order Successfully Placed `,
    text: "Done",
    html: `<!doctype html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Simple Transactional Email</title>
        <style>
          /* -------------------------------------
              GLOBAL RESETS
          ------------------------------------- */
          
          /*All the styling goes here*/
          
          img {
            border: none;
            -ms-interpolation-mode: bicubic;
            max-width: 100%; 
          }
    
          body {
            background-color: #f6f6f6;
            font-family: sans-serif;
            -webkit-font-smoothing: antialiased;
            font-size: 14px;
            line-height: 1.4;
            margin: 0;
            padding: 0;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%; 
          }
    
          table {
            border-collapse: separate;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            width: 100%; }
            table td {
              font-family: sans-serif;
              font-size: 14px;
              vertical-align: top; 
          }
    
          /* -------------------------------------
              BODY & CONTAINER
          ------------------------------------- */
    
          .body {
            background-color: #f6f6f6;
            width: 100%; 
          }
    
          /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
          .container {
            display: block;
            margin: 0 auto !important;
            /* makes it centered */
            max-width: 580px;
            padding: 10px;
            width: 580px; 
          }
    
          /* This should also be a block element, so that it will fill 100% of the .container */
          .content {
            box-sizing: border-box;
            display: block;
            margin: 0 auto;
            max-width: 580px;
            padding: 10px; 
          }
    
          /* -------------------------------------
              HEADER, FOOTER, MAIN
          ------------------------------------- */
          .main {
            background: #ffffff;
            border-radius: 3px;
            width: 100%; 
          }
    
          .wrapper {
            box-sizing: border-box;
            padding: 20px; 
          }
    
          .content-block {
            padding-bottom: 10px;
            padding-top: 10px;
          }
    
          .footer {
            clear: both;
            margin-top: 10px;
            text-align: center;
            width: 100%; 
          }
            .footer td,
            .footer p,
            .footer span,
            .footer a {
              color: #999999;
              font-size: 12px;
              text-align: center; 
          }
    
          /* -------------------------------------
              TYPOGRAPHY
          ------------------------------------- */
          h1,
          h2,
          h3,
          h4 {
            color: #000000;
            font-family: sans-serif;
            font-weight: 400;
            line-height: 1.4;
            margin: 0;
            margin-bottom: 30px; 
          }
    
          h1 {
            font-size: 35px;
            font-weight: 300;
            text-align: center;
            text-transform: capitalize; 
          }
    
          p,
          ul,
          ol {
            font-family: sans-serif;
            font-size: 14px;
            font-weight: normal;
            margin: 0;
            margin-bottom: 15px; 
          }
            p li,
            ul li,
            ol li {
              list-style-position: inside;
              margin-left: 5px; 
          }
    
          a {
            color: #3498db;
            text-decoration: underline; 
          }
    
          /* -------------------------------------
              BUTTONS
          ------------------------------------- */
          .btn {
            box-sizing: border-box;
            width: 100%; }
            .btn > tbody > tr > td {
              padding-bottom: 15px; }
            .btn table {
              width: auto; 
          }
            .btn table td {
              background-color: #ffffff;
              border-radius: 5px;
              text-align: center; 
          }
            .btn a {
              background-color: #ffffff;
              border: solid 1px #3498db;
              border-radius: 5px;
              box-sizing: border-box;
              color: #3498db;
              cursor: pointer;
              display: inline-block;
              font-size: 14px;
              font-weight: bold;
              margin: 0;
              padding: 12px 25px;
              text-decoration: none;
              text-transform: capitalize; 
          }
    
          .btn-primary table td {
            background-color: #3498db; 
          }
    
          .btn-primary a {
            background-color: #3498db;
            border-color: #3498db;
            color: #ffffff; 
          }
    
          /* -------------------------------------
              OTHER STYLES THAT MIGHT BE USEFUL
          ------------------------------------- */
          .last {
            margin-bottom: 0; 
          }
    
          .first {
            margin-top: 0; 
          }
    
          .align-center {
            text-align: center; 
          }
    
          .align-right {
            text-align: right; 
          }
    
          .align-left {
            text-align: left; 
          }
    
          .clear {
            clear: both; 
          }
    
          .mt0 {
            margin-top: 0; 
          }
    
          .mb0 {
            margin-bottom: 0; 
          }
    
          .preheader {
            color: transparent;
            display: none;
            height: 0;
            max-height: 0;
            max-width: 0;
            opacity: 0;
            overflow: hidden;
            mso-hide: all;
            visibility: hidden;
            width: 0; 
          }
    
          .powered-by a {
            text-decoration: none; 
          }
    
          hr {
            border: 0;
            border-bottom: 1px solid #f6f6f6;
            margin: 20px 0; 
          }
    
          /* -------------------------------------
              RESPONSIVE AND MOBILE FRIENDLY STYLES
          ------------------------------------- */
          @media only screen and (max-width: 620px) {
            table.body h1 {
              font-size: 28px !important;
              margin-bottom: 10px !important; 
            }
            table.body p,
            table.body ul,
            table.body ol,
            table.body td,
            table.body span,
            table.body a {
              font-size: 16px !important; 
            }
            table.body .wrapper,
            table.body .article {
              padding: 10px !important; 
            }
            table.body .content {
              padding: 0 !important; 
            }
            table.body .container {
              padding: 0 !important;
              width: 100% !important; 
            }
            table.body .main {
              border-left-width: 0 !important;
              border-radius: 0 !important;
              border-right-width: 0 !important; 
            }
            table.body .btn table {
              width: 100% !important; 
            }
            table.body .btn a {
              width: 100% !important; 
            }
            table.body .img-responsive {
              height: auto !important;
              max-width: 100% !important;
              width: auto !important; 
            }
          }
    
          /* -------------------------------------
              PRESERVE THESE STYLES IN THE HEAD
          ------------------------------------- */
          @media all {
            .ExternalClass {
              width: 100%; 
            }
            .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
              line-height: 100%; 
            }
            .apple-link a {
              color: inherit !important;
              font-family: inherit !important;
              font-size: inherit !important;
              font-weight: inherit !important;
              line-height: inherit !important;
              text-decoration: none !important; 
            }
            #MessageViewBody a {
              color: inherit;
              text-decoration: none;
              font-size: inherit;
              font-family: inherit;
              font-weight: inherit;
              line-height: inherit;
            }
            .btn-primary table td:hover {
              background-color: #34495e !important; 
            }
            .btn-primary a:hover {
              background-color: #34495e !important;
              border-color: #34495e !important; 
            } 
          }
    
        </style>
      </head>
      <body>
        <span class="preheader">This is preheader text. Some clients will show this text as a preview.</span>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
          <tr>
            <td>&nbsp;</td>
            <td class="container">
              <div class="content">
    
                <!-- START CENTERED WHITE CONTAINER -->
                <table role="presentation" class="main">
    
                  <!-- START MAIN CONTENT AREA -->
                  <tr>
                    <td class="wrapper">
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                          <td>
                          <h1 >NJ AUTOMATIONS</h1>
                            <p>Hi there, ${names}</p>
                            <p>Thanks for shopping with NJ Automations.</p>
                            <p>Your Order details are: </p>
                             <img src="${image}" alt="" style="width: auto; max-width: 150px;max-height: 150px;height: auto; margin-bottom: 20px; display: block;">
                            <p>Product Name: ${pname}</p>
                            <p>Ordered Quantity: ${qty}.</p>
                            
                            <p>Delivery Address: ${address}, ${city}, ${state}.</p>
                            
                            <p>Order Total: ${price * qty}</p>
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
                              <tbody>
                                <tr>
                                  <td align="left">
                                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                      <tbody>
                                        <tr>
                                          <td> <a href="https://njautomation.in/Orders" target="_blank">Check My Orders</a> </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <p>You Will get an Update Mail once your Order gets an Update.</p>
                            <p>Keep Checking your mails.</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
    
                <!-- END MAIN CONTENT AREA -->
                </table>
                <!-- END CENTERED WHITE CONTAINER -->
    
                <!-- START FOOTER -->
                <div class="footer">
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                      <td class="content-block">
                        <h3 class="apple-link">NJ Automations</h3>
                       
                      </td>
                    </tr>
                  </table>
                </div>
                <!-- END FOOTER -->
    
              </div>
            </td>
            <td>&nbsp;</td>
          </tr>
        </table>
      </body>
    </html>`,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        reject(err);
      } else {
        resolve(info);
      }
    });
  });
};

exports.sendOrderUpdateEmail = async (
  email,
  names,
  image,
  qty,
  price,
  city,
  state,
  address,
  pname,
  id,
  status
) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    auth: {
      user: "insuranceproject377@gmail.com",
      pass: "dapfwnqlvwefjcun",
    },
  });

  let maillist = [email, "fakeb82@gmail.com"];

  maillist.toString();

  const mailData = {
    from: {
      name: `Nj Automations`,
      address: "sales@njautomation.in",
    },
    to: maillist,
    subject: `Update for your Order`,
    html: `
    <!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
        <meta charset="utf-8"> <!-- utf-8 works for most cases -->
        <meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Use the latest (edge) version of IE rendering engine -->
        <meta name="x-apple-disable-message-reformatting">  <!-- Disable auto-scale in iOS 10 Mail entirely -->
        <title></title> <!-- The title tag shows in email notifications, like Android 4.4. -->
    
        <link href="https://fonts.googleapis.com/css?family=Work+Sans:200,300,400,500,600,700" rel="stylesheet">
    
        <!-- CSS Reset : BEGIN -->
        <style>
    
            /* What it does: Remove spaces around the email design added by some email clients. */
            /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */
            html,
    body {
        margin: 0 auto !important;
        padding: 0 !important;
        height: 100% !important;
        width: 100% !important;
        background: #f1f1f1;
    }
    
    /* What it does: Stops email clients resizing small text. */
    * {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
    }
    
    /* What it does: Centers email on Android 4.4 */
    div[style*="margin: 16px 0"] {
        margin: 0 !important;
    }
    
    /* What it does: Stops Outlook from adding extra spacing to tables. */
    table,
    td {
        mso-table-lspace: 0pt !important;
        mso-table-rspace: 0pt !important;
    }
    
    /* What it does: Fixes webkit padding issue. */
    table {
        border-spacing: 0 !important;
        border-collapse: collapse !important;
        table-layout: fixed !important;
        margin: 0 auto !important;
    }
    
    /* What it does: Uses a better rendering method when resizing images in IE. */
    img {
        -ms-interpolation-mode:bicubic;
    }
    
    /* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
    a {
        text-decoration: none;
    }
    
    /* What it does: A work-around for email clients meddling in triggered links. */
    *[x-apple-data-detectors],  /* iOS */
    .unstyle-auto-detected-links *,
    .aBn {
        border-bottom: 0 !important;
        cursor: default !important;
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
    }
    
    /* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
    .a6S {
        display: none !important;
        opacity: 0.01 !important;
    }
    
    /* What it does: Prevents Gmail from changing the text color in conversation threads. */
    .im {
        color: inherit !important;
    }
    
    /* If the above doesn't work, add a .g-img class to any image in question. */
    img.g-img + div {
        display: none !important;
    }
    
    /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
    /* Create one of these media queries for each additional viewport size you'd like to fix */
    
    /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
    @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
        u ~ div .email-container {
            min-width: 320px !important;
        }
    }
    /* iPhone 6, 6S, 7, 8, and X */
    @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
        u ~ div .email-container {
            min-width: 375px !important;
        }
    }
    /* iPhone 6+, 7+, and 8+ */
    @media only screen and (min-device-width: 414px) {
        u ~ div .email-container {
            min-width: 414px !important;
        }
    }
        </style>
    
        <!-- CSS Reset : END -->
    
        <!-- Progressive Enhancements : BEGIN -->
        <style>
    
            .primary{
        background: #17bebb;
    }
    .bg_white{
        background: #ffffff;
    }
    .bg_light{
        background: #f7fafa;
    }
    .bg_black{
        background: #000000;
    }
    .bg_dark{
        background: rgba(0,0,0,.8);
    }
    .email-section{
        padding:2.5em;
    }
    
    /*BUTTON*/
    .btn{
        padding: 10px 15px;
        display: inline-block;
    }
    .btn.btn-primary{
        border-radius: 5px;
        background: #17bebb;
        color: #ffffff;
    }
    .btn.btn-white{
        border-radius: 5px;
        background: #ffffff;
        color: #000000;
    }
    .btn.btn-white-outline{
        border-radius: 5px;
        background: transparent;
        border: 1px solid #fff;
        color: #fff;
    }
    .btn.btn-black-outline{
        border-radius: 0px;
        background: transparent;
        border: 2px solid #000;
        color: #000;
        font-weight: 700;
    }
    .btn-custom{
        color: rgba(0,0,0,.3);
        text-decoration: underline;
    }
    
    h1,h2,h3,h4,h5,h6{
        font-family: 'Work Sans', sans-serif;
        color: #000000;
        margin-top: 0;
        font-weight: 400;
    }
    
    body{
        font-family: 'Work Sans', sans-serif;
        font-weight: 400;
        font-size: 15px;
        line-height: 1.8;
        color: rgba(0,0,0,.4);
    }
    
    a{
        color: #17bebb;
    }
    
    table{
    }
    /*LOGO*/
    
    .logo h1{
        margin: 0;
    }
    .logo h1 a{
        color: #17bebb;
        font-size: 24px;
        font-weight: 700;
        font-family: 'Work Sans', sans-serif;
    }
    
    /*HERO*/
    .hero{
        position: relative;
        z-index: 0;
    }
    
    .hero .text{
        color: rgba(0,0,0,.3);
    }
    .hero .text h2{
        color: #000;
        font-size: 34px;
        margin-bottom: 15px;
        font-weight: 300;
        line-height: 1.2;
    }
    .hero .text h3{
        font-size: 24px;
        font-weight: 200;
    }
    .hero .text h2 span{
        font-weight: 600;
        color: #000;
    }
    
    
    /*PRODUCT*/
    .product-entry{
        display: block;
        position: relative;
        float: left;
        padding-top: 20px;
    }
    .product-entry .text{
        width: calc(100% - 125px);
        padding-left: 20px;
    }
    .product-entry .text h3{
        margin-bottom: 0;
        padding-bottom: 0;
    }
    .product-entry .text p{
        margin-top: 0;
    }
    .product-entry img, .product-entry .text{
        float: left;
    }
    
    ul.social{
        padding: 0;
    }
    ul.social li{
        display: inline-block;
        margin-right: 10px;
    }
    
    /*FOOTER*/
    
    .footer{
        border-top: 1px solid rgba(0,0,0,.05);
        color: rgba(0,0,0,.5);
    }
    .footer .heading{
        color: #000;
        font-size: 20px;
    }
    .footer ul{
        margin: 0;
        padding: 0;
    }
    .footer ul li{
        list-style: none;
        margin-bottom: 10px;
    }
    .footer ul li a{
        color: rgba(0,0,0,1);
    }
    
    
    @media screen and (max-width: 500px) {
    
    
    }
    
    
        </style>
    
    
    </head>
    
    <body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #f1f1f1;">
        <center style="width: 100%; background-color: #f1f1f1;">
        <div style="display: none; font-size: 1px;max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
          &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
        </div>
        <div style="max-width: 600px; margin: 0 auto;" class="email-container">
            <!-- BEGIN BODY -->
          <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
              <tr>
              <td valign="top" class="bg_white" style="padding: 1em 2.5em 0 2.5em;">
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                          <td class="logo" style="text-align: left;">
                            <h1><a href="#">NJ Automations</a></h1>
                          </td>
                      </tr>
                  </table>
              </td>
              </tr><!-- end tr -->
                    <tr>
              <td valign="middle" class="hero bg_white" style="padding: 2em 0 2em 0;">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <td style="padding: 0 2.5em; text-align: left;">
                            <div class="text">
                            
                                <h3>${names}, There has been an update for your Order recently placed on Nj Automations</h3>
                            </div>
                        </td>
                    </tr>
                </table>
              </td>
              </tr><!-- end tr -->
               <tr>
              <td valign="middle" class="hero bg_white" style="padding: 2em 0 2em 0;">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <td style="padding: 0 2.5em; text-align: left;">
                            <div class="text">
                            
                                <h3>Order ID: ${id}, is now ${status} </h3>
                            </div>
                        </td>
                    </tr>
                </table>
              </td>
              </tr><!-- end tr -->
              
               <tr>
              <td valign="middle" class="hero bg_white" style="padding: 2em 0 2em 0;">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <td style="padding: 0 2.5em; text-align: left;">
                            <div class="text">
                            
                                <h3>Product Details are Below </h3>
                            </div>
                        </td>
                    </tr>
                </table>
              </td>
              </tr><!-- end tr -->
              <tr>
                  <table class="bg_white" role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr style="border-bottom: 1px solid rgba(0,0,0,.05);">
                            <th width="80%" style="text-align:left; padding: 0 2.5em; color: #000; padding-bottom: 20px">Item</th>
                            <th width="20%" style="text-align:right; padding: 0 2.5em; color: #000; padding-bottom: 20px">Price</th>
                          </tr>
                          <tr style="border-bottom: 1px solid rgba(0,0,0,.05);">
                              <td valign="middle" width="80%" style="text-align:left; padding: 0 2.5em;">
                                  <div class="product-entry">
                                      <img src="${image}" alt="" style="width: auto; max-width: 150px;max-height: 150px;height: auto; margin-bottom: 20px; display: block;">
                                      <div class="text">
                                          <h3>${pname}</h3><br>
                                          <span>Quantity: ${qty}</span>
                                          <br>
                                          <br>
                                          <p>Delivery Address: ${address}, ${city}, ${state}</p>
                                      </div>
                                  </div>
                              </td>
                              <td valign="middle" width="20%" style="text-align:left; padding: 0 2.5em;">
                                  <span class="price" style="color: #000; font-size: 20px;">${
                                    price * qty
                                  }</span>
                              </td>
                          </tr>
                         
                          <tr>
                              <td valign="middle" style="text-align:left; padding: 1em 2.5em;">
                                  <p><a href="https://nj-automations-home.vercel.app/Orders" class="btn btn-primary">Check Your Orders</a></p>
                              </td>
                          </tr>
                  </table>
              </tr><!-- end tr -->
          <!-- 1 Column Text + Button : END -->
          </table>
          <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
              <tr>
              <td valign="middle" class="bg_light footer email-section">
                <table>
                    <tr>
                    <td valign="top" width="33.333%" style="padding-top: 20px;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td style="text-align: left; padding-right: 10px;">
                              <h3 class="heading">About</h3>
                              <p>Total Solution of Printed Circuit Boards with Consistent Quality, Appropriate Delivery & Competitive cost.</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td valign="top" width="33.333%" style="padding-top: 20px;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td style="text-align: left; padding-left: 5px; padding-right: 5px;">
                              <h3 class="heading">Contact Info</h3>
                              <ul>
                                        <li><span class="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                                        <li><span class="text">+2 392 3929 210</span></a></li>
                                      </ul>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td valign="top" width="33.333%" style="padding-top: 20px;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td style="text-align: left; padding-left: 10px;">
                              <h3 class="heading">Useful Links</h3>
                              <ul>
                                        <li><a href="https://nj-automations-home.vercel.app/">Home</a></li>
                                        <li><a href="https://nj-automations-home.vercel.app/Our-Products">Our Products</a></li>
                                        <li><a href="https://nj-automations-home.vercel.app/Shop">Shop</a></li>
                                        <li><a href="https://nj-automations-home.vercel.app/Orders">Orders</a></li>
                                      </ul>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr><!-- end: tr -->
          </table>
    
        </div>
      </center>
    </body>
    </html>`,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        reject(err);
      } else {
        resolve(info);
      }
    });
  });
};
