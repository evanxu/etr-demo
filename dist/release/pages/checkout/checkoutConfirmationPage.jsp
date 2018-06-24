<%@ page trimDirectiveWhitespaces="true" %>
<%@ page import="de.hybris.platform.basecommerce.enums.WeekDay" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="template" tagdir="/WEB-INF/tags/desktop/template" %>
<%@ taglib prefix="checkout" tagdir="/WEB-INF/tags/desktop/checkout" %>
<%@ taglib prefix="cart" tagdir="/WEB-INF/tags/desktop/cart" %>
<%@ taglib prefix="multi-checkout" tagdir="/WEB-INF/tags/desktop/checkout/multi" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="cms" uri="http://hybris.com/tld/cmstags" %>
<%@ taglib prefix="common" tagdir="/WEB-INF/tags/desktop/common" %>
<%@ taglib prefix="theme" tagdir="/WEB-INF/tags/shared/theme" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="ycommerce" uri="http://hybris.com/tld/ycommercetags" %>
<%@ taglib prefix="format" tagdir="/WEB-INF/tags/shared/format" %>
<%@ taglib prefix="store" tagdir="/WEB-INF/tags/desktop/store" %>
<template:page pageTitle="${pageTitle}" hideHeaderLinks="true">

	<div id="globalMessages">
		<common:globalMessages />
	</div>

		
	<main>
		<div class="section-container checkout-wrapper">
			<multi-checkout:checkoutViewOrderDetail abstractOrderData="${orderData }"/>
			<multi-checkout:thanks orderData="${orderData }"/> 
			<checkout:checkoutFeature />
			<%-- <multi-checkout:travelBanner /> --%>
		</div>
	</main>
	
	
		<script src="/js/common.js"></script>
		
		<script src="/js/checkoutConfirmationPage.8f51922a6.js"></script>
		
</template:page>