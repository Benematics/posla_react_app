import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccountSidebar from '../components/AccountSidebar';



const AccountOrders = () => {
	return(
		<>
			<Header/>
				    <div class="container">
        <div class="row">
            <div class="d-none d-md-block col-md-4 col-lg-3">

               <AccountSidebar/>

            </div>

            <div class="col-12 col-md-8 col-lg-9">

                <div aria-label="breadcrumb" class="details-page-breadcrumb mb-10">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/account">Account</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Orders</li>
                    </ol>
                </div>

                <div class="section">
                    <div class="section-title section-title-sm">
                        My Orders
                    </div>

                    <div class="table-responsive b-1-ddd">
                        <table class="table table-tr-lines table-tr-padding">
                            <thead>
                                <tr class="bg-eee">
                                    <th>
                                        Description
                                    </th>
                                    <th class="d-none d-lg-table-cell">
                                        Status
                                    </th>
                                    <th class="d-none d-lg-table-cell">
                                        Date
                                    </th>
                                    <th class="d-none d-lg-table-cell">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>


                                <tr>
                                    <td>
                                        <div>
                                            <div class="pull-left overflow-hidden">
                                                <a href="/account/orders/123456789012" class="mr-15 d-block overflow-hidden" Style={{"max-width": "100px", "max-height": "100px"}}>
                                                    <img src='img/app/bgs/posla-admin.jpg' alt="" class="dp-contain" />
                                                </a>
                                            </div>
                                            <div class="overflow-hidden">
                                                <a href="/account/orders/123456789012" class="font-bold d-inline-block hover-underline">
                                                    I will design a beautiful logo for your business
                                                </a>
                                                <div class="">
                                                    <div class="text-orange mt-5">
                                                        <label class="label label-transparent-black label-sm mr-5">
                                                            Deal
                                                        </label>
                                                        By: Olawale Lawal
                                                    </div>
                                                    <div class="text-fade mt-5">
                                                        Category (Subcategory)
                                                    </div>
                                                    <div class="text-fade mt-5">
                                                        Package: Basic Designs
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-block d-lg-none bt-1-ddd mt-10 p-10 bg-eee">
                                            <div class="pull-right">
                                                <a href="/account/orders/123456789012" class="btn btn-blue btn-sm icon-right">
                                                    View
                                                    <span class="fa fa-angle-right"></span>
                                                </a>
                                            </div>
                                            <div class="overflow-hidden">
                                                <div class="pull-left mr-10">
                                                    <label class="label label-orange label-md">
                                                        In progress
                                                    </label>
                                                </div>
                                                <div class="overflow-hidden">
                                                    <div class="mt-5">
                                                        Feb 04, 2021
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="d-none d-lg-table-cell">
                                        <div>
                                            <label class="label label-orange label-md">
                                                In progress
                                            </label>
                                        </div>
                                    </td>
                                    <td class="d-none d-lg-table-cell">
                                        <div>
                                            Feb 04, 2021
                                        </div>
                                    </td>
                                    <td class="d-none d-lg-table-cell">
                                        <div>
                                            <a href="/account/orders/123456789012" class="btn btn-blue btn-sm icon-right">
                                                View
                                                <span class="fa fa-angle-right"></span>
                                            </a>
                                        </div>
                                    </td>
                                </tr>


                                <tr>
                                    <td>
                                        <div>
                                            <div class="pull-left overflow-hidden">
                                                <a href="/account/orders/123456789012" class="mr-15 d-block overflow-hidden" Style={{"max-width": "100px", "max-height": "100px"}}>
                                                    <img src='img/app/bgs/posla-admin.jpg' alt="" class="dp-contain" />
                                                </a>
                                            </div>
                                            <div class="overflow-hidden">
                                                <a href="/account/orders/123456789012" class="font-bold d-inline-block hover-underline">
                                                    I will design a beautiful logo for your business
                                                </a>
                                                <div class="">
                                                    <div class="text-orange mt-5">
                                                        <label class="label label-transparent-black label-sm mr-5">
                                                            Project
                                                        </label>
                                                        By: Olawale Lawal
                                                    </div>
                                                    <div class="text-fade mt-5">
                                                        Category (Subcategory)
                                                    </div>
                                                    <div class="text-fade mt-5">
                                                        Package: Basic Designs
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-block d-lg-none bt-1-ddd mt-10 p-10 bg-eee">
                                            <div class="pull-right">
                                                <a href="/account/orders/123456789012" class="btn btn-blue btn-sm icon-right">
                                                    View
                                                    <span class="fa fa-angle-right"></span>
                                                </a>
                                            </div>
                                            <div class="overflow-hidden">
                                                <div class="pull-left mr-10">
                                                    <label class="label label-orange label-md">
                                                        In progress
                                                    </label>
                                                </div>
                                                <div class="overflow-hidden">
                                                    <div class="mt-5">
                                                        Feb 04, 2021
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="d-none d-lg-table-cell">
                                        <div>
                                            <label class="label label-orange label-md">
                                                In progress
                                            </label>
                                        </div>
                                    </td>
                                    <td class="d-none d-lg-table-cell">
                                        <div>
                                            Feb 04, 2021
                                        </div>
                                    </td>
                                    <td class="d-none d-lg-table-cell">
                                        <div>
                                            <a href="/account/orders/123456789012" class="btn btn-blue btn-sm icon-right">
                                                View
                                                <span class="fa fa-angle-right"></span>
                                            </a>
                                        </div>
                                    </td>
                                </tr>

                                
                                <tr>
                                    <td>
                                        <div>
                                            <div class="pull-left overflow-hidden">
                                                <a href="/account/orders/123456789012" class="mr-15 d-block overflow-hidden" Style={{"max-width": "100px", "max-height": "100px"}}>
                                                    <img src='img/app/bgs/posla-admin.jpg' alt="" class="dp-contain" />
                                                </a>
                                            </div>
                                            <div class="overflow-hidden">
                                                <a href="/account/orders/123456789012" class="font-bold d-inline-block hover-underline">
                                                    I will design a beautiful logo for your business
                                                </a>
                                                <div class="">
                                                    <div class="text-orange mt-5">
                                                        <label class="label label-transparent-black label-sm mr-5">
                                                            Project
                                                        </label>
                                                        By: Olawale Lawal
                                                    </div>
                                                    <div class="text-fade mt-5">
                                                        Category (Subcategory)
                                                    </div>
                                                    <div class="text-fade mt-5">
                                                        Package: Basic Designs
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-block d-lg-none bt-1-ddd mt-10 p-10 bg-eee">
                                            <div class="pull-right">
                                                <a href="/account/orders/123456789012" class="btn btn-blue btn-sm icon-right">
                                                    View
                                                    <span class="fa fa-angle-right"></span>
                                                </a>
                                            </div>
                                            <div class="overflow-hidden">
                                                <div class="pull-left mr-10">
                                                    <label class="label label-orange label-md">
                                                        In progress
                                                    </label>
                                                </div>
                                                <div class="overflow-hidden">
                                                    <div class="mt-5">
                                                        Feb 04, 2021
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="d-none d-lg-table-cell">
                                        <div>
                                            <label class="label label-orange label-md">
                                                In progress
                                            </label>
                                        </div>
                                    </td>
                                    <td class="d-none d-lg-table-cell">
                                        <div>
                                            Feb 04, 2021
                                        </div>
                                    </td>
                                    <td class="d-none d-lg-table-cell">
                                        <div>
                                            <a href="/account/orders/123456789012" class="btn btn-blue btn-sm icon-right">
                                                View
                                                <span class="fa fa-angle-right"></span>
                                            </a>
                                        </div>
                                    </td>
                                </tr>


                                <tr>
                                    <td>
                                        <div>
                                            <div class="pull-left overflow-hidden">
                                                <a href="/account/orders/123456789012" class="mr-15 d-block overflow-hidden" Style={{"max-width": "100px", "max-height": "100px"}}>
                                                    <img src='img/app/bgs/posla-admin.jpg' alt="" class="dp-contain" />
                                                </a>
                                            </div>
                                            <div class="overflow-hidden">
                                                <a href="/account/orders/123456789012" class="font-bold d-inline-block hover-underline">
                                                    I will design a beautiful logo for your business
                                                </a>
                                                <div class="">
                                                    <div class="text-orange mt-5">
                                                        <label class="label label-transparent-black label-sm mr-5">
                                                            Deal
                                                        </label>
                                                        By: Olawale Lawal
                                                    </div>
                                                    <div class="text-fade mt-5">
                                                        Category (Subcategory)
                                                    </div>
                                                    <div class="text-fade mt-5">
                                                        Package: Basic Designs
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-block d-lg-none bt-1-ddd mt-10 p-10 bg-eee">
                                            <div class="pull-right">
                                                <a href="/account/orders/123456789012" class="btn btn-blue btn-sm icon-right">
                                                    View
                                                    <span class="fa fa-angle-right"></span>
                                                </a>
                                            </div>
                                            <div class="overflow-hidden">
                                                <div class="pull-left mr-10">
                                                    <label class="label label-orange label-md">
                                                        In progress
                                                    </label>
                                                </div>
                                                <div class="overflow-hidden">
                                                    <div class="mt-5">
                                                        Feb 04, 2021
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="d-none d-lg-table-cell">
                                        <div>
                                            <label class="label label-orange label-md">
                                                In progress
                                            </label>
                                        </div>
                                    </td>
                                    <td class="d-none d-lg-table-cell">
                                        <div>
                                            Feb 04, 2021
                                        </div>
                                    </td>
                                    <td class="d-none d-lg-table-cell">
                                        <div>
                                            <a href="/account/orders/123456789012" class="btn btn-blue btn-sm icon-right">
                                                View
                                                <span class="fa fa-angle-right"></span>
                                            </a>
                                        </div>
                                    </td>
                                </tr>


                                <tr>
                                    <td>
                                        <div>
                                            <div class="pull-left overflow-hidden">
                                                <a href="/account/orders/123456789012" class="mr-15 d-block overflow-hidden" Style={{"max-width": "100px", "max-height": "100px"}}>
                                                    <img src='img/app/bgs/posla-admin.jpg' alt="" class="dp-contain" />
                                                </a>
                                            </div>
                                            <div class="overflow-hidden">
                                                <a href="/account/orders/123456789012" class="font-bold d-inline-block hover-underline">
                                                    I will design a beautiful logo for your business
                                                </a>
                                                <div class="">
                                                    <div class="text-orange mt-5">
                                                        <label class="label label-transparent-black label-sm mr-5">
                                                            Deal
                                                        </label>
                                                        By: Olawale Lawal
                                                    </div>
                                                    <div class="text-fade mt-5">
                                                        Category (Subcategory)
                                                    </div>
                                                    <div class="text-fade mt-5">
                                                        Package: Basic Designs
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-block d-lg-none bt-1-ddd mt-10 p-10 bg-eee">
                                            <div class="pull-right">
                                                <a href="/account/orders/123456789012" class="btn btn-blue btn-sm icon-right">
                                                    View
                                                    <span class="fa fa-angle-right"></span>
                                                </a>
                                            </div>
                                            <div class="overflow-hidden">
                                                <div class="pull-left mr-10">
                                                    <label class="label label-orange label-md">
                                                        In progress
                                                    </label>
                                                </div>
                                                <div class="overflow-hidden">
                                                    <div class="mt-5">
                                                        Feb 04, 2021
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="d-none d-lg-table-cell">
                                        <div>
                                            <label class="label label-orange label-md">
                                                In progress
                                            </label>
                                        </div>
                                    </td>
                                    <td class="d-none d-lg-table-cell">
                                        <div>
                                            Feb 04, 2021
                                        </div>
                                    </td>
                                    <td class="d-none d-lg-table-cell">
                                        <div>
                                            <a href="/account/orders/123456789012" class="btn btn-blue btn-sm icon-right">
                                                View
                                                <span class="fa fa-angle-right"></span>
                                            </a>
                                        </div>
                                    </td>
                                </tr>


                                <tr>
                                    <td>
                                        <div>
                                            <div class="pull-left overflow-hidden">
                                                <a href="/account/orders/123456789012" class="mr-15 d-block overflow-hidden" Style={{"max-width": "100px", "max-height": "100px"}}>
                                                    <img src='img/app/bgs/posla-admin.jpg' alt="" class="dp-contain" />
                                                </a>
                                            </div>
                                            <div class="overflow-hidden">
                                                <a href="/account/orders/123456789012" class="font-bold d-inline-block hover-underline">
                                                    I will design a beautiful logo for your business
                                                </a>
                                                <div class="">
                                                    <div class="text-orange mt-5">
                                                        <label class="label label-transparent-black label-sm mr-5">
                                                            Project
                                                        </label>
                                                        By: Olawale Lawal
                                                    </div>
                                                    <div class="text-fade mt-5">
                                                        Category (Subcategory)
                                                    </div>
                                                    <div class="text-fade mt-5">
                                                        Package: Basic Designs
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-block d-lg-none bt-1-ddd mt-10 p-10 bg-eee">
                                            <div class="pull-right">
                                                <a href="/account/orders/123456789012" class="btn btn-blue btn-sm icon-right">
                                                    View
                                                    <span class="fa fa-angle-right"></span>
                                                </a>
                                            </div>
                                            <div class="overflow-hidden">
                                                <div class="pull-left mr-10">
                                                    <label class="label label-orange label-md">
                                                        In progress
                                                    </label>
                                                </div>
                                                <div class="overflow-hidden">
                                                    <div class="mt-5">
                                                        Feb 04, 2021
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="d-none d-lg-table-cell">
                                        <div>
                                            <label class="label label-orange label-md">
                                                In progress
                                            </label>
                                        </div>
                                    </td>
                                    <td class="d-none d-lg-table-cell">
                                        <div>
                                            Feb 04, 2021
                                        </div>
                                    </td>
                                    <td class="d-none d-lg-table-cell">
                                        <div>
                                            <a href="/account/orders/123456789012" class="btn btn-blue btn-sm icon-right">
                                                View
                                                <span class="fa fa-angle-right"></span>
                                            </a>
                                        </div>
                                    </td>
                                </tr>


                                <tr>
                                    <td>
                                        <div>
                                            <div class="pull-left overflow-hidden">
                                                <a href="/account/orders/123456789012" class="mr-15 d-block overflow-hidden" Style={{"max-width": "100px", "max-height": "100px"}}>
                                                    <img src='img/app/bgs/posla-admin.jpg' alt="" class="dp-contain" />
                                                </a>
                                            </div>
                                            <div class="overflow-hidden">
                                                <a href="/account/orders/123456789012" class="font-bold d-inline-block hover-underline">
                                                    I will design a beautiful logo for your business
                                                </a>
                                                <div class="">
                                                    <div class="text-orange mt-5">
                                                        <label class="label label-transparent-black label-sm mr-5">
                                                            Project
                                                        </label>
                                                        By: Olawale Lawal
                                                    </div>
                                                    <div class="text-fade mt-5">
                                                        Category (Subcategory)
                                                    </div>
                                                    <div class="text-fade mt-5">
                                                        Package: Basic Designs
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-block d-lg-none bt-1-ddd mt-10 p-10 bg-eee">
                                            <div class="pull-right">
                                                <a href="/account/orders/123456789012" class="btn btn-blue btn-sm icon-right">
                                                    View
                                                    <span class="fa fa-angle-right"></span>
                                                </a>
                                            </div>
                                            <div class="overflow-hidden">
                                                <div class="pull-left mr-10">
                                                    <label class="label label-orange label-md">
                                                        In progress
                                                    </label>
                                                </div>
                                                <div class="overflow-hidden">
                                                    <div class="mt-5">
                                                        Feb 04, 2021
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="d-none d-lg-table-cell">
                                        <div>
                                            <label class="label label-orange label-md">
                                                In progress
                                            </label>
                                        </div>
                                    </td>
                                    <td class="d-none d-lg-table-cell">
                                        <div>
                                            Feb 04, 2021
                                        </div>
                                    </td>
                                    <td class="d-none d-lg-table-cell">
                                        <div>
                                            <a href="/account/orders/123456789012" class="btn btn-blue btn-sm icon-right">
                                                View
                                                <span class="fa fa-angle-right"></span>
                                            </a>
                                        </div>
                                    </td>
                                </tr>


                                <tr>
                                    <td>
                                        <div>
                                            <div class="pull-left overflow-hidden">
                                                <a href="/account/orders/123456789012" class="mr-15 d-block overflow-hidden" Style={{"max-width": "100px", "max-height": "100px"}}>
                                                    <img src='img/app/bgs/posla-admin.jpg' alt="" class="dp-contain" />
                                                </a>
                                            </div>
                                            <div class="overflow-hidden">
                                                <a href="/account/orders/123456789012" class="font-bold d-inline-block hover-underline">
                                                    I will design a beautiful logo for your business
                                                </a>
                                                <div class="">
                                                    <div class="text-orange mt-5">
                                                        <label class="label label-transparent-black label-sm mr-5">
                                                            Deal
                                                        </label>
                                                        By: Olawale Lawal
                                                    </div>
                                                    <div class="text-fade mt-5">
                                                        Category (Subcategory)
                                                    </div>
                                                    <div class="text-fade mt-5">
                                                        Package: Basic Designs
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-block d-lg-none bt-1-ddd mt-10 p-10 bg-eee">
                                            <div class="pull-right">
                                                <a href="/account/orders/123456789012" class="btn btn-blue btn-sm icon-right">
                                                    View
                                                    <span class="fa fa-angle-right"></span>
                                                </a>
                                            </div>
                                            <div class="overflow-hidden">
                                                <div class="pull-left mr-10">
                                                    <label class="label label-orange label-md">
                                                        In progress
                                                    </label>
                                                </div>
                                                <div class="overflow-hidden">
                                                    <div class="mt-5">
                                                        Feb 04, 2021
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="d-none d-lg-table-cell">
                                        <div>
                                            <label class="label label-orange label-md">
                                                In progress
                                            </label>
                                        </div>
                                    </td>
                                    <td class="d-none d-lg-table-cell">
                                        <div>
                                            Feb 04, 2021
                                        </div>
                                    </td>
                                    <td class="d-none d-lg-table-cell">
                                        <div>
                                            <a href="/account/orders/123456789012" class="btn btn-blue btn-sm icon-right">
                                                View
                                                <span class="fa fa-angle-right"></span>
                                            </a>
                                        </div>
                                    </td>
                                </tr>


                                <tr>
                                    <td>
                                        <div>
                                            <div class="pull-left overflow-hidden">
                                                <a href="/account/orders/123456789012" class="mr-15 d-block overflow-hidden" Style={{"max-width": "100px", "max-height": "100px"}}>
                                                    <img src='img/app/bgs/posla-admin.jpg' alt="" class="dp-contain" />
                                                </a>
                                            </div>
                                            <div class="overflow-hidden">
                                                <a href="/account/orders/123456789012" class="font-bold d-inline-block hover-underline">
                                                    I will design a beautiful logo for your business
                                                </a>
                                                <div class="">
                                                    <div class="text-orange mt-5">
                                                        <label class="label label-transparent-black label-sm mr-5">
                                                            Project
                                                        </label>
                                                        By: Olawale Lawal
                                                    </div>
                                                    <div class="text-fade mt-5">
                                                        Category (Subcategory)
                                                    </div>
                                                    <div class="text-fade mt-5">
                                                        Package: Basic Designs
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-block d-lg-none bt-1-ddd mt-10 p-10 bg-eee">
                                            <div class="pull-right">
                                                <a href="/account/orders/123456789012" class="btn btn-blue btn-sm icon-right">
                                                    View
                                                    <span class="fa fa-angle-right"></span>
                                                </a>
                                            </div>
                                            <div class="overflow-hidden">
                                                <div class="pull-left mr-10">
                                                    <label class="label label-orange label-md">
                                                        In progress
                                                    </label>
                                                </div>
                                                <div class="overflow-hidden">
                                                    <div class="mt-5">
                                                        Feb 04, 2021
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="d-none d-lg-table-cell">
                                        <div>
                                            <label class="label label-orange label-md">
                                                In progress
                                            </label>
                                        </div>
                                    </td>
                                    <td class="d-none d-lg-table-cell">
                                        <div>
                                            Feb 04, 2021
                                        </div>
                                    </td>
                                    <td class="d-none d-lg-table-cell">
                                        <div>
                                            <a href="/account/orders/123456789012" class="btn btn-blue btn-sm icon-right">
                                                View
                                                <span class="fa fa-angle-right"></span>
                                            </a>
                                        </div>
                                    </td>
                                </tr>


                                <tr>
                                    <td>
                                        <div>
                                            <div class="pull-left overflow-hidden">
                                                <a href="/account/orders/123456789012" class="mr-15 d-block overflow-hidden" Style={{"max-width": "100px", "max-height": "100px"}}>
                                                    <img src='img/app/bgs/posla-admin.jpg' alt="" class="dp-contain" />
                                                </a>
                                            </div>
                                            <div class="overflow-hidden">
                                                <a href="/account/orders/123456789012" class="font-bold d-inline-block hover-underline">
                                                    I will design a beautiful logo for your business
                                                </a>
                                                <div class="">
                                                    <div class="text-orange mt-5">
                                                        <label class="label label-transparent-black label-sm mr-5">
                                                            Deal
                                                        </label>
                                                        By: Olawale Lawal
                                                    </div>
                                                    <div class="text-fade mt-5">
                                                        Category (Subcategory)
                                                    </div>
                                                    <div class="text-fade mt-5">
                                                        Package: Basic Designs
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-block d-lg-none bt-1-ddd mt-10 p-10 bg-eee">
                                            <div class="pull-right">
                                                <a href="/account/orders/123456789012" class="btn btn-blue btn-sm icon-right">
                                                    View
                                                    <span class="fa fa-angle-right"></span>
                                                </a>
                                            </div>
                                            <div class="overflow-hidden">
                                                <div class="pull-left mr-10">
                                                    <label class="label label-orange label-md">
                                                        In progress
                                                    </label>
                                                </div>
                                                <div class="overflow-hidden">
                                                    <div class="mt-5">
                                                        Feb 04, 2021
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="d-none d-lg-table-cell">
                                        <div>
                                            <label class="label label-orange label-md">
                                                In progress
                                            </label>
                                        </div>
                                    </td>
                                    <td class="d-none d-lg-table-cell">
                                        <div>
                                            Feb 04, 2021
                                        </div>
                                    </td>
                                    <td class="d-none d-lg-table-cell">
                                        <div>
                                            <a href="/account/orders/123456789012" class="btn btn-blue btn-sm icon-right">
                                                View
                                                <span class="fa fa-angle-right"></span>
                                            </a>
                                        </div>
                                    </td>
                                </tr>


                            </tbody>
                        </table>
                    </div>


                </div>


            </div>
        </div>
    </div>
			<Footer/>
		</>
		)
}
export default AccountOrders;