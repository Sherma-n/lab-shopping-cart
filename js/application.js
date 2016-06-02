//Javascript wait html load ready
$(document).ready(function(){
  //calculating sub-total
  var calculateSubTotal = function () {
    //define scope
    $('.tableRow').each(function () {
      var $elem = $(this);

      // define elements
      var priceStr = $elem.find('.price p').html().substring(1);
      var quantity = $elem.find('.quantity').val();
      // calculating subtotal
      var subtotal = parseInt(priceStr) * quantity;

      //log sub total to input
      $elem.find('.foodprice').html("$" + subtotal);
    });
  };

  //calculateTotal Function
  var calculateTotal = function() {
    //define elements total variable
    var $elem = $(this);
    var total = 0;
    //get foodprice number for each row
    $('.foodprice').each(function(index, subtotal) {
      var subtotal = $elem.find('.foodprice').text().substring(1);
      total += parseInt($(subtotal).html());
    });
    //change text of final to $ + total
    $('.totalPrice').text('$' + total.toFixed(2));
  };

  var createItem = function() {
    var itemName = $ ('#foodin').val();
    var itemUnitPrice = $('pricein').val();

//checking if price is an integer
    if($.isNumeric(itemUnitPrice) === false) {
      alert('unit price must be a number');
    } else if (itemName === ' ') {
      alert('item name cannot be empty');
    } else {
      itemUnitPrice = Number(itemUnitPrice).toFixed(2);
      var newItem = ' ' +
      '<tr class="tableRow">' + 
      '<td class="food">' + itemName + '</td>' +
      '<td class="price">' + itemUnitPrice + '</td>' + 
      '<td class="Qty">' +
      'QTY' +
      '<input class="quantity" type="number" value="0">' +
      '<button class="Cancel">Cancel</button>' +
      '</td>';

    }
  };
      $(newItem).prependTo($('#items-list')).slideDown('slow');
      $('#new-item-name').val('');
      $('#new-item-unit-price').val('');

      $('input.quantity').off().on('keyup', updateQuantity);
      $('.cancel').off().on('click', removeItem);
    });


  // calculate total price on click
  var init = function () {
    $('.calculatetotal #calculate').on('click', function () {
      calculateSubTotal();
      calculateTotal();
    });

    $('.quantity').on('keyup', function () {
      calculateSubTotal();    
    })
    // $('.cancel').on('click', function () {
    //   $('.quantity').remove();
    // });


  init();
  
  
  //add in new rows
//  var createNewRow = function(inputNa, inputP) {
    //define elements 
//    var newFoodN = $('#foodin', this).val();
//    var newFoodPr = $('#pricein', this).val();
//      $('.table tr:last').after('<tr><td></td></tr><tr><td><td></tr>');
//      };
   
 //Javascript End
