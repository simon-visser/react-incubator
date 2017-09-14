# ComicStockwebApi.OrderDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **Number** |  | [optional] 
**id** | **Number** |  | [optional] 
**orderDate** | **Date** |  | [optional] 
**issue** | [**IssueDto**](IssueDto.md) |  | [optional] 
**items** | [**[OrderItemDto]**](OrderItemDto.md) |  | [optional] 
**deliveryStatus** | **String** |  | [optional] 
**shipmentReference** | **String** |  | [optional] 
**shipmentDate** | **Date** |  | [optional] 


<a name="DeliveryStatusEnum"></a>
## Enum: DeliveryStatusEnum


* `Cancelled` (value: `"Cancelled"`)

* `Delivered` (value: `"Delivered"`)

* `Pending` (value: `"Pending"`)




