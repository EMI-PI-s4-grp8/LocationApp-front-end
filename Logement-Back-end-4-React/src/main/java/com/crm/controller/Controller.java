package com.crm.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import javax.validation.Valid;
import com.crm.model.Logement;
import com.crm.services.LogementServices;

@RestController
@CrossOrigin("*") //you can put the exact url instead of * (= all ursls)
public class Controller {
	
		@Autowired
	LogementServices logementServices;
		
// @RequestMapping(value="/logement" , method = RequestMethod.GET)
//	public String getLogement() {
//	 return "test";
// }
 
/*
 * http://localhost:8082/logement/1
 * 
 * {
    "intitule": "LogementTestupdate",
	"description":"LogementTest description",
	"prix": 12.0,
	"image": "LogementTestImage"
}
 */
	
		@RequestMapping(value="/logements" ,method=RequestMethod.GET)
		public List<Logement> GetLogement(){
			return logementServices.getAllLogements();
		}
		
		@RequestMapping(value="/logement/{id}" ,method=RequestMethod.GET)
		public Optional<Logement> GetLogementById(@PathVariable("id") String id){
			return logementServices.findLogementById(Long.parseLong(id));
		}
		
		@RequestMapping(value="/logement" ,method=RequestMethod.POST)
		public Logement AddLogement(@Valid @RequestBody Logement logement){
			return logementServices.addLogements(logement);
		}
		
		@RequestMapping(value="/logement/{id}" ,method=RequestMethod.PUT)
		public Optional<Logement> updateLogement(@PathVariable("id") String id,@Valid @RequestBody Logement logement){
			return logementServices.updateLogementById(logement, Long.parseLong(id));
		}
		
		@RequestMapping(value="/logement/{id}" ,method=RequestMethod.DELETE)
		public ResponseEntity<?> deleteLogementById(@PathVariable("id") String id){
			 logementServices.deleteLogementById(Long.parseLong(id));
			 return ResponseEntity.ok().body("Logement "+ id + " supprime");	 
		}
 
 
 
 
 
 
 
 
 
// 
// 
// 
// 
//	@RequestMapping(value="/form",method=RequestMethod.GET)
//	public String formLogement(Model model) {
//		model.addAttribute("logement", new Logement());
//		return "logement";
//	}
//	
//	@RequestMapping(value="/save",method=RequestMethod.POST)
//	public String save(Model model,Logement logement) {
//			
//		logementRepository.save(logement);
//		return "confirmation";//confirmation
//	}
//	
//	@RequestMapping(value="/index1")
//	public String index(Model model,
//			@RequestParam(name="page",defaultValue="0")int p,
//			@RequestParam(name="size",defaultValue="3")int s,
//			@RequestParam(name="motCle",defaultValue="")String mc) {
//		if (mc==null) {
//			Page<Logement> pageLogements=logementRepository.findAll(PageRequest.of(p, s));
//			model.addAttribute("listProduits",pageLogements.getContent());
//			int[] pages=new int[pageLogements.getTotalPages()];
//			model.addAttribute("pages",pages);
//			model.addAttribute("size",s);
//			model.addAttribute("pageCourante",p);
//			return "recherche";
//			}
//		else {
//			List<Logement> pageLogements=
//					logementRepository.chercher("%"+mc+"%");
//			model.addAttribute("listLogements",pageLogements);
//			//int[] pages=new int[pageProduits.getTotalPages()];
//			//model.addAttribute("pages",pages);
//			//model.addAttribute("size",s);
//			//model.addAttribute("pageCourante",p);
//			model.addAttribute("motCle",mc);
//			return "recherche";
//			
//		}
//		//return "produits";
//	}
//	
////	  @RequestMapping(value="/delete",method=RequestMethod.POST)
////	  public String delete(Model model,Long id) {
////		  userRepository.deleteById(id);
////		  return "redirect:/index1"; 
////	  }
//	
//	
//	  @GetMapping("/delete")
//	  public String delete(Long id) {
//		  logementRepository.deleteById(id);
//		  return "redirect:/index1"; 
//	  }
//	  
//	  @GetMapping("/edit")
//	  public String edit(Model model ,Long id) {
//		  Logement logement=logementRepository.findById(id).get();
//		  model.addAttribute("logement",logement);
//		  return "logementEdit"; 
//	  }
//	  
//	  @GetMapping("/reserver")
//	  public String reserver(Model model ,Long id) {
//		  Logement logement=logementRepository.findById(id).get();
//		  model.addAttribute("logement",logement);
//		  return "logementReserver"; 
//	  }
//	  
//	  @RequestMapping(value="/index") 
//	  public String Index() {
//		  return "index";
//	  
//	  }
}
