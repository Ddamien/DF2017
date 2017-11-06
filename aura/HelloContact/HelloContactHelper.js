({
	loadContact: function(component)
	{
		var action = component.get("c.getContactDetails");
		action.setParams({
			contactId : component.get("v.recordId")
		});
		
		action.setCallback(this, function(response)
		{
			var state = response.getState();
			if (state === "SUCCESS")
			{
				component.set("v.cnt", response.getReturnValue());
			} else
			{
				console.debug(response.error[0].message);
			}
		});
		$A.enqueueAction(action);
	}
})