{{ '<%@ page trimDirectiveWhitespaces="true" %>' }}
{{ '<%@ taglib prefix="template" tagdir="/WEB-INF/tags/desktop/template" %>' }}
{{ '<%@ taglib prefix="product" tagdir="/WEB-INF/tags/desktop/product" %>' }}
{{ '<%@ taglib prefix="cms" uri="http://hybris.com/tld/cmstags" %>' }}
{{ '<%@ taglib prefix="common" tagdir="/WEB-INF/tags/desktop/common" %>' }}
{{ '<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>' }}
{{ '<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>' }}
{{ '<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>' }}
<template:page pageTitle="${pageTitle}">
<div class="section-container checkout-wrapper thanks-error">
  <!-- view order detail-->
  <c:url var="loginURL" value="/login" />
  <div class="section-container thanks-wrapper">
    <div class="header">
      <i aria-hidden="true" lang="en" class="icon-complete-round"></i>
      <h2 class="title"><spring:theme code="text.account.activate.success.notice.title" /></h2>
      {{ '<%-- <div class="text"><a href="${loginURL }" ><spring:theme code="text.account.acitvate.success.notice.text"/></a></div> --%>' }}
    </div>
  </div>
  <!-- end view detail -->

  <!-- checkout feature -->
  <div class="checkout-feature">
    <ul>
      <li>
        <div>
          <i class="icon-worldwide-guarantee" aria-hidden="true" lang="en"></i>
          <span class="label"><spring:theme code="checkout.checkout.feature.worldwideGuarantee"/></span>
        </div>
      </li>
      <li class="checkout-feature-line"></li>
      <li>
        <div>
        <i class="icon-authentic-products" aria-hidden="true" lang="en"></i>
        <span class="label"><spring:theme code="checkout.checkout.feature.authenticProducts"/></span>
        </div>
      </li>
      <li class="checkout-feature-line"></li>
      <li>
        <div>
        <i class="icon-pick-up" aria-hidden="true" lang="en"></i>
        <span class="label"><spring:theme code="checkout.checkout.feature.pickupInStore"/></span>
        </div>
      </li>
    </ul>
  </div>
  <!-- checkout feature -->

</div>

<!-- travel banner module/ use rotating-banner.scss  -->
  <cms:pageSlot position="Down" var="feature" >
		<cms:component component="${feature}"/>
	</cms:pageSlot>  

<!-- end travel banner module -->
<% for (var chunk in htmlWebpackPlugin.files.chunks) { %>
  <script src="{{htmlWebpackPlugin.files.chunks[chunk].entry}}"></script>
  <% } %>
</template:page>