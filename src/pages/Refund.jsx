import React from "react";

const RefundPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Refund Policy</h1>
      <p>
        At CATTA FASHIONS LLP, we are dedicated to ensuring your satisfaction
        with any product you order from us.
      </p>
      <p>
        If the product you have ordered from us is damaged, defective, or
        different from what you had ordered, please notify us within 7 days of
        the delivery.
      </p>
      <p>
        We will not be able to accept damaged/defective, wrong product shipped
        if we have been notified later than 7 days from receipt of the package.
      </p>
      <p>
        Click the below link to place your return request,{" "}
        <a href="/return" className="text-blue-500 underline">
          Return
        </a>
      </p>
      <p>
        For any queries reach us at –{" "}
        <a
          href="mailto:cattafashion@gmail.com"
          className="text-blue-500 underline"
        >
          cattafashion@gmail.com
        </a>{" "}
        (Monday - Friday - 10.00 AM to 5.30 PM)
      </p>

      <h2 className="text-xl font-semibold mt-6">DAMAGED / DEFECTIVE</h2>
      <p>
        In the unlikely event that any product you have ordered from us is not
        received in a good condition, is damaged, defective or if the product
        delivered is different from what you had ordered, you may return the
        unused product in the same condition that you received.
      </p>

      <h2 className="text-xl font-semibold mt-6">TERMS & CONDITIONS</h2>
      <h3 className="text-lg font-semibold mt-4">
        Steps to follow when placing a Return Request
      </h3>
      <ol className="list-decimal list-inside mb-4">
        <li>Place the item in the original packet.</li>
        <li>
          <span>
            Ensure the item is unused, unwashed and has all original tags intact
            including the MRP tag.
          </span>
          <ol className="list-decimal list-inside mt-2">
            <li>
              If the MRP tag is not attached to the item then you may find it as
              a sticker on the transparent polythene cover in which your item
              was wrapped.
            </li>
          </ol>
        </li>
      </ol>

      <p>
        In case we are unable to replace the damaged / defective product,
        refunds would be made subject to below conditions:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          In case of single quantity in one order- we will refund the entire
          order amount.
        </li>
        <li>
          In case of an order with multiple products, if return for a single
          product is requested, we will refund only the value of the product
          (selling price).
        </li>
        <li>
          In case of an order with multiple products, if a return for the entire
          order is requested, we will refund the entire order amount.
        </li>
      </ul>
      <p>
        Please do not accept delivery of any item whose outer packaging is
        damaged or tampered with in any manner.
      </p>
      <p>Shipping Charges are nonrefundable.</p>

      <p>
        Please contact customer support if you open the packaging and discover
        that the item you have received is damaged. You can email us at{" "}
        <a
          href="mailto:cattafashion@gmail.com"
          className="text-blue-500 underline"
        >
          cattafashion@gmail.com
        </a>
      </p>

      <h2 className="text-xl font-semibold mt-6">REFUNDS</h2>
      <p>
        We will process the refund once we receive the returned product in its
        original/ intact condition and its QC is qualified for refund by the
        internal team.
      </p>
      <p>Refunds will be made in original mode of payment.</p>
      <p>
        If the payment mode was Cash on Delivery, we will refund the amount to
        the bank account of your choice. Please add your Bank details (Account
        Holders Name, Bank Name, Account No, Account Type, IFSC Code, Branch
        name, and cancelled cheque image) while placing a return request, so we
        can transfer the money in your account. Please ensure that the details
        that you enter are correct. CATTA FASHIONS LLP will not validate Bank
        Account numbers and is not responsible for funds transferred to an
        unintended recipient.
      </p>
      <p>
        Typically, all refunds are processed in about 21 days, and if it’s NOT
        processed in this period please email us at{" "}
        <a
          href="mailto:cattafashion@gmail.com"
          className="text-blue-500 underline"
        >
          cattafashion@gmail.com
        </a>{" "}
        with your name, phone number and order number.
      </p>
      <p>
        Please note that we shall not be responsible for any delays in credit to
        the cardholder's credit card/ debit card account as that is managed by
        the cardholder's issuing bank. In case of any delay, it shall be up to
        the customer to take it up with their respective credit card/ debit card
        bank with the reference of{" "}
        <a href="http://www.catta.in" className="text-blue-500 underline">
          www.catta.in
        </a>{" "}
        refund process reference.
      </p>
      <p>
        If you have any questions, please email us at{" "}
        <a
          href="mailto:cattafashion@gmail.com"
          className="text-blue-500 underline"
        >
          cattafashion@gmail.com
        </a>
      </p>
    </div>
  );
};

export default RefundPolicy;
