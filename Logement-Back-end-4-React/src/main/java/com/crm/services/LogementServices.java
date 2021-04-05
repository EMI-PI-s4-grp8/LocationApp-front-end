package com.crm.services;

import java.util.List;
import java.util.Optional;

import com.crm.model.Logement;
import com.crm.repository.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Service
public class LogementServices {
	@Autowired
	private LogementRepository logementRepository;

	
public List<Logement> getAllLogements(){
	return logementRepository.findAll();
};


public Logement addLogements( Logement logement){
	return logementRepository.save(logement);
};


public Optional<Logement> findLogementById(Long id) {
	return logementRepository.findById(id);
}

public Boolean existById(Long id) {
	return logementRepository.existsById(id);
}


public Optional<Logement> updateLogementById(Logement logement , Long id) {
	return logementRepository.findById(id).map((d) ->{
		d.setIntitule(logement.getIntitule());
		d.setDescription(logement.getDescription());
		d.setPrix(logement.getPrix());
		d.setImage(logement.getImage());
		return logementRepository.save(d);
	});
}


public void deleteLogementById(Long id) {
	  logementRepository.deleteById(id);
}




public String edit(Model model ,Long id) {
	  Logement logement=logementRepository.findById(id).get();
	  model.addAttribute("logement",logement);
	  return "logementEdit"; 
}

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
