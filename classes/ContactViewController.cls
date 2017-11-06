public with sharing class ContactViewController
{
	@AuraEnabled
	public static Contact getContactDetails(Id contactId)
	{
		return [SELECT Name FROM Contact WHERE Id = :contactId];
	}
}